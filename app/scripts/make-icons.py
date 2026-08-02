"""Build the site icons: an italic x with a roman 2, cut from Iowan Old Style.

The site sets its mathematics in Iowan Old Style, so the mark is the font's own
outlines rather than a drawing of them. Run this to regenerate the icons; the
output is committed, so the fonts are not a build dependency.
"""
import subprocess
import sys
import tempfile
from pathlib import Path

from fontTools.ttLib import TTCollection
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.misc.transform import Transform

TTC = "/System/Library/Fonts/Supplemental/Iowan Old Style.ttc"
UPEM = 2048
ROMAN, ITALIC = 0, 2

# The mark, in em units.
SUP = 0.58        # superscript size, as a fraction of the body
RAISE = 0.32      # superscript baseline above the body baseline
GAP = 0.02        # sidebearing added between the two glyphs

TILE = 64
INSET = 8.0       # clear space inside the tile
RADIUS = 13

PAPER = "#fdfcfa"
INK = "#1e1c1a"

tc = TTCollection(TTC)


def _glyph(font_index, char):
    font = tc.fonts[font_index]
    glyphs = font.getGlyphSet()
    return glyphs, glyphs[font.getBestCmap()[ord(char)]]


def draw(font_index, char, transform):
    glyphs, glyph = _glyph(font_index, char)
    pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}")
    glyph.draw(TransformPen(pen, transform))
    return pen.getCommands()


def bounds(font_index, char, transform):
    glyphs, glyph = _glyph(font_index, char)
    pen = BoundsPen(glyphs)
    glyph.draw(TransformPen(pen, transform))
    return pen.bounds


def advance(font_index, char):
    return _glyph(font_index, char)[1].width


def placements():
    """Where each glyph sits, in em units with the body baseline at zero."""
    s = 1.0 / UPEM
    body = (s, 0, 0, s, 0, 0)
    sup = (SUP * s, 0, 0, SUP * s, advance(ITALIC, "x") * s + GAP, RAISE)
    return [(ITALIC, "x", body), (ROMAN, "2", sup)]


def paths():
    """The two glyph paths, fitted and centred in the tile."""
    boxes = [bounds(i, c, Transform(*t)) for i, c, t in placements()]
    x0 = min(b[0] for b in boxes)
    y0 = min(b[1] for b in boxes)
    width = max(b[2] for b in boxes) - x0
    height = max(b[3] for b in boxes) - y0

    k = (TILE - 2 * INSET) / max(width, height)
    fit = Transform(
        k, 0, 0, -k,
        (TILE - width * k) / 2 - x0 * k,
        (TILE + height * k) / 2 + y0 * k,
    )
    return [draw(i, c, fit.transform(t)) for i, c, t in placements()]


def svg(radius=RADIUS):
    glyphs = "".join(f'<path d="{d}"/>' for d in paths())
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {TILE} {TILE}">'
        f"<title>NCEA Level 2 Maths</title>"
        f'<rect width="{TILE}" height="{TILE}" rx="{radius}" fill="{INK}"/>'
        f'<g fill="{PAPER}">{glyphs}</g>'
        "</svg>\n"
    )


def render(source, target, size):
    """Rasterise an SVG at one pixel size, returning the file written."""
    subprocess.run(
        ["rsvg-convert", "-w", str(size), "-h", str(size), source, "-o", target],
        check=True,
    )
    return target


if __name__ == "__main__":
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "public")
    out.mkdir(parents=True, exist_ok=True)

    (out / "favicon.svg").write_text(svg())

    # iOS rounds the corners itself, so its icon is cut square.
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        (tmp / "square.svg").write_text(svg(radius=0))
        render(tmp / "square.svg", out / "apple-touch-icon.png", 180)

        sizes = [render(out / "favicon.svg", tmp / f"{s}.png", s) for s in (16, 32, 48)]
        subprocess.run(["magick", *sizes, out / "favicon.ico"], check=True)

    print(f"written to {out}/")
