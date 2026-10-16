import { Button } from '@/components/ui/button'
import { ArrowRight } from '@/components/icons'
import { PROOF, SITE, SNAPSHOT } from '@/data/content'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b px-5 pb-16 pt-[calc(68px+3rem)] sm:px-6 sm:pt-[calc(68px+5rem)]">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-card px-3.5 py-1.5 text-[0.82rem] font-medium text-muted-foreground shadow-[0_0_0_1px_var(--border)]">
            <span className="size-[7px] rounded-full bg-emerald-600" aria-hidden="true" />
            Accepting select freelance engagements
          </p>
          <h1 id="hero-title" className="mb-6 max-w-[20ch] text-[clamp(2.3rem,4.8vw,3.6rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            Backend &amp; cloud engineering for products that have to <span className="text-primary">scale</span>.
          </h1>
          <p className="mb-9 max-w-[58ch] text-[1.1rem] leading-[1.7] text-muted-foreground">
            I'm Joseph Bautista, a senior software engineer across backend, cloud and AI, with 8+ years shipping Laravel, Python,
            PostgreSQL and AWS systems for startups and growing teams. I design the architecture, automate the delivery, and keep
            the cloud bill honest.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 w-full px-5 text-[0.95rem] sm:w-auto">
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                Book a discovery call <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 w-full px-5 text-[0.95rem] sm:w-auto">
              <a href="#work">See selected work</a>
            </Button>
          </div>
        </div>

        <aside aria-label="Profile snapshot" className="self-start rounded-xl bg-card px-6 py-1.5 shadow-[0_0_0_1px_var(--border),0_8px_24px_rgb(15_27_45/0.05)]">
          <dl className="divide-y">
            {SNAPSHOT.map((s) => (
              <div key={s.label} className="py-4">
                <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                <dd className="text-[0.95rem] leading-snug">
                  {s.href ? (
                    <>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="border-b border-primary/40 transition-colors [@media(hover:hover)]:hover:text-primary">{s.linkText}</a>
                      {s.tail}
                    </>
                  ) : s.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="mx-auto mt-16 max-w-[1120px]">
        <ul aria-label="Selected results" className="grid grid-cols-2 border-t lg:grid-cols-4">
          {PROOF.map((p, i) => (
            <li key={p.label} className={`pb-6 pr-4 pt-7 sm:pr-6 ${i > 0 ? 'lg:border-l lg:pl-6' : ''} ${i % 2 === 1 ? 'border-l pl-4 sm:pl-6' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''}`}>
              <span className="block text-[clamp(1.9rem,3.4vw,2.5rem)] font-bold leading-none tracking-[-0.03em] text-primary tabular-nums">{p.value}</span>
              <span className="mt-2.5 block max-w-[26ch] text-sm leading-snug text-muted-foreground">{p.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
