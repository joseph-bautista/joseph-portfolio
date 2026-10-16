import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight, Calendar, Github, Linkedin, Mail, serviceIcons } from '@/components/icons'
import { Section } from '@/components/Section'
import { BEYOND, EDUCATION, JOBS, PROCESS, SERVICES, SITE, SKILLS, WORK } from '@/data/content'

function Tags({ tags, small }: { tags: readonly string[]; small?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t}>
          <Badge variant="secondary" className={small ? 'text-[0.74rem] font-medium' : 'text-[0.78rem] font-medium'}>{t}</Badge>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <Section id="services" label="Services" title="What I can take off your plate" intro="Senior engineering for teams that need the backend, the cloud and the delivery pipeline done properly, without hiring a whole department.">
      <div className="grid gap-x-12 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = serviceIcons[s.icon]
          return (
            <article key={s.title} data-reveal className="flex flex-col gap-3 border-t py-7">
              <Icon className="size-[22px] text-primary" aria-hidden="true" />
              <h3 className="text-[1.15rem] font-semibold tracking-tight">{s.title}</h3>
              <p className="max-w-[52ch] flex-1 text-muted-foreground">{s.body}</p>
              <Tags tags={s.tags} />
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export function Work() {
  return (
    <Section id="work" label="Selected work" title="Things I've shipped" alt>
      <div className="border-t">
        {WORK.map((w) => (
          <article key={w.num} data-reveal className="grid gap-4 border-b py-9 md:grid-cols-[170px_1fr_190px] md:gap-10">
            <div className="flex items-baseline gap-4 md:flex-col md:gap-1">
              <span className="text-sm font-semibold text-primary">{w.num}</span>
              <span className="text-sm font-medium text-muted-foreground">{w.type}</span>
            </div>
            <div>
              <h3 className="mb-2 text-[1.4rem] font-semibold leading-tight tracking-tight">
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 transition-colors [@media(hover:hover)]:hover:text-primary">
                  {w.title}
                  <ArrowUpRight className="size-[0.75em] opacity-55 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>
              </h3>
              <p className="mb-4 max-w-[62ch] text-muted-foreground">{w.body}</p>
              <Tags tags={w.tags} />
            </div>
            <p className="self-start text-[1.1rem] font-semibold leading-snug md:text-right">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{w.resultLabel}</span>
              {w.result.map((r) => <span key={r} className="block">{r}</span>)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="process" label="How I work" title="A simple, predictable way to build">
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <li key={p.title} data-reveal className="border-t-2 border-foreground pt-4">
            <span className="text-sm font-semibold text-primary">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mb-2 mt-1 text-[1.1rem] font-semibold tracking-tight">{p.title}</h3>
            <p className="text-[0.95rem] text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Rows({ title, rows }: { title: string; rows: { name: string; meta: string }[] }) {
  return (
    <div data-reveal className="mt-16">
      <h3 className="mb-5 text-xl font-semibold tracking-tight">{title}</h3>
      <ul className="grid gap-x-10 border-t sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {rows.map((r) => (
          <li key={r.name} className="flex flex-col gap-1 border-b py-4">
            <span className="text-[0.95rem] font-semibold">{r.name}</span>
            <span className="text-sm text-muted-foreground">{r.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked" alt>
      <ol className="border-b">
        {JOBS.map((j) => (
          <li key={j.title + j.period} data-reveal className="grid gap-1.5 border-t py-8 md:grid-cols-[190px_1fr] md:gap-8">
            <p className="pt-0.5 text-sm font-medium text-muted-foreground">{j.period}</p>
            <div>
              <h3 className="text-[1.1rem] font-semibold tracking-tight">{j.title}</h3>
              <p className="mb-4 mt-0.5 text-[0.92rem] font-medium text-primary">{j.company}</p>
              <ul className="mb-4 flex max-w-[70ch] flex-col gap-2">
                {j.bullets.map((b) => (
                  <li key={b} className="relative pl-4 text-[0.95rem] text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:size-[5px] before:rounded-full before:bg-primary/40">{b}</li>
                ))}
              </ul>
              <Tags tags={j.tags} small />
            </div>
          </li>
        ))}
      </ol>
      <Rows title="Education" rows={EDUCATION} />
      <Rows title="Technical skills" rows={SKILLS} />
    </Section>
  )
}

export function About() {
  return (
    <Section id="about" label="About" title="Engineer first, always moving">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div data-reveal className="space-y-4 text-[1.05rem] text-muted-foreground">
          <p>
            I'm a husband and father of a young family, and an engineer who cares about systems that are simple to run and honest about
            what they cost. Clients get a single senior point of contact who can reason about the product, the code and the
            infrastructure together.
          </p>
          <p>
            Away from the keyboard, the court, the gym and the trail keep me sharp. They also shape how I work: consistency over
            heroics, form over ego, and patience on the long climb.
          </p>
        </div>
        <ul data-reveal className="border-t">
          {BEYOND.map((b) => (
            <li key={b.name} className="flex flex-col justify-between gap-1 border-b py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-semibold">{b.name}</span>
              <span className="text-sm text-muted-foreground sm:text-right">{b.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-8 pt-4">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <Card data-reveal className="gap-0 rounded-xl border-0 bg-foreground p-8 text-background shadow-none sm:p-16 dark:border dark:bg-card dark:text-foreground">
          <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-teal-300 dark:text-primary">Contact</p>
          <h2 id="contact-title" className="mb-4 max-w-[20ch] text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.03em]">
            Have a system that needs to <span className="text-teal-300 dark:text-primary">scale</span>?
          </h2>
          <p className="mb-8 max-w-[52ch] text-[1.05rem] opacity-80">
            Book a 30-minute discovery call, or email me a little about the product, the stack and where it hurts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 w-full bg-background text-foreground hover:bg-background/90 sm:w-auto dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"><Calendar aria-hidden="true" /> Book a 30-min discovery call</a>
            </Button>
            {[
              { href: `mailto:${SITE.email}?subject=Project%20inquiry`, label: 'Email me', Icon: Mail, ext: false },
              { href: SITE.linkedin, label: 'LinkedIn', Icon: Linkedin, ext: true },
              { href: SITE.github, label: 'GitHub', Icon: Github, ext: true },
            ].map(({ href, label, Icon, ext }) => (
              <Button key={label} asChild size="lg" variant="outline" className="h-11 w-full border-white/30 bg-transparent text-background hover:bg-white/10 hover:text-background sm:w-auto dark:border-border dark:text-foreground dark:hover:bg-secondary dark:hover:text-foreground">
                <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><Icon aria-hidden="true" /> {label}</a>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t px-5 py-8 sm:px-6">
      <Separator className="hidden" />
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-8 gap-y-2 text-sm text-muted-foreground">
        <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Joseph Bautista · Metro Manila, Philippines</p>
        <p>Hand-built and self-hosted on a home server.</p>
      </div>
    </footer>
  )
}
