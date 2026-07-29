/**
 * The course structure, and the lesson scripts that fill it.
 *
 * Lessons are authored as Markdown in `content/` and are the source of truth for
 * their own title and subtitle; this module supplies only the ordering and
 * grouping that Markdown cannot express — which topics belong to which module,
 * and in what sequence they should be studied.
 *
 * Use this when you need the course as navigable data: a table of contents, a
 * lesson looked up by id, or the topic that comes next.
 */

/** One lesson. A single page, covering one topic from the standard. */
export interface Topic {
  readonly id: string
  readonly title: string
  /** The italic line beneath the title, where the script supplies one. */
  readonly subtitle?: string
  /** The script body, with the title and subtitle removed. */
  readonly markdown: string
}

/** A group of related topics within a subject. */
export interface Module {
  readonly id: string
  readonly title: string
  /** The framing that holds the module's topics together, if any. */
  readonly blurb?: string
  readonly topics: readonly Topic[]
}

/** One NCEA achievement standard, and the modules it has been divided into. */
export interface Subject {
  readonly id: string
  readonly title: string
  /** The standard's number, e.g. `AS91261`. */
  readonly standard: string
  /** Whether the standard is sat as an exam or assessed internally. */
  readonly assessment: 'external' | 'internal'
  readonly modules: readonly Module[]
}

/** A topic together with the module and subject it sits in. */
export interface TopicLocation {
  readonly subject: Subject
  readonly module: Module
  readonly topic: Topic
}

interface ModuleSpec {
  readonly id: string
  readonly title: string
  readonly blurb?: string
  /** Paths relative to `content/`, in study order. */
  readonly files: readonly string[]
}

interface SubjectSpec {
  readonly id: string
  readonly title: string
  readonly standard: string
  readonly assessment: 'external' | 'internal'
  readonly modules: readonly ModuleSpec[]
}

const STRUCTURE: readonly SubjectSpec[] = [
  {
    id: 'algebra',
    title: 'Algebra',
    standard: 'AS91261',
    assessment: 'external',
    modules: [
      {
        id: 'introduction',
        title: 'Introduction',
        blurb:
          'What the standard covers, how the three modules build on each other, ' +
          'and which formulae are supplied in the exam.',
        files: ['algebra/a-intro.md'],
      },
      {
        id: 'expressions',
        title: 'Module A — Expressions',
        blurb:
          'No equals signs. You are given something and asked to rewrite it — ' +
          'expand it, factorise it, cancel it down, tidy up its powers.',
        files: [
          'algebra/a1-manipulating-expressions.md',
          'algebra/a2-rational-expressions.md',
          'algebra/a3-exponents.md',
        ],
      },
    ],
  },
]

const SOURCES = import.meta.glob('../../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const TITLE = /^#\s+(.+)$/m
const SUBTITLE = /^\*([^*].*)\*$/m

/**
 * Builds a topic from its script, taking the title and subtitle from the
 * Markdown itself so that they are stated in exactly one place.
 */
function readTopic(file: string): Topic {
  const source = SOURCES[`../../content/${file}`]
  if (source === undefined) throw new Error(`No lesson script at content/${file}`)

  const title = TITLE.exec(source)
  const subtitle = SUBTITLE.exec(source)

  let markdown = source
  if (title) markdown = markdown.replace(title[0], '')
  if (subtitle) markdown = markdown.replace(subtitle[0], '')

  return {
    id: file.replace(/^.*\//, '').replace(/\.md$/, ''),
    title: title ? title[1].trim() : file,
    subtitle: subtitle?.[1].trim(),
    markdown: markdown.replace(/^\s*---\s*$/m, '').trim(),
  }
}

export const SUBJECTS: readonly Subject[] = STRUCTURE.map((subject) => ({
  ...subject,
  modules: subject.modules.map((module) => ({
    id: module.id,
    title: module.title,
    blurb: module.blurb,
    topics: module.files.map(readTopic),
  })),
}))

/** Every topic in study order, flattened across modules and subjects. */
export const TOPIC_ORDER: readonly TopicLocation[] = SUBJECTS.flatMap((subject) =>
  subject.modules.flatMap((module) =>
    module.topics.map((topic) => ({ subject, module, topic })),
  ),
)

/** Locates a topic by id, or returns undefined if no such topic exists. */
export function findTopic(id: string): TopicLocation | undefined {
  return TOPIC_ORDER.find((entry) => entry.topic.id === id)
}

/**
 * The topics either side of the given one in study order, for onward
 * navigation. Either may be undefined at the ends of the course.
 */
export function neighbours(id: string): {
  previous?: TopicLocation
  next?: TopicLocation
} {
  const index = TOPIC_ORDER.findIndex((entry) => entry.topic.id === id)
  if (index < 0) return {}
  return { previous: TOPIC_ORDER[index - 1], next: TOPIC_ORDER[index + 1] }
}
