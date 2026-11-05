import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({ id, label, title, intro, alt, children }: { id: string; label: string; title: string; intro?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-16 sm:py-24', alt && 'border-y bg-secondary/60')}>
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <header data-reveal className="mb-12 max-w-[62ch]">
          <p className="mb-3 font-mono text-[0.76rem] font-medium uppercase tracking-[0.12em] text-primary before:mr-2 before:content-['//'] before:opacity-60">{label}</p>
          <h2 id={`${id}-title`} className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em]">{title}</h2>
          {intro && <p className="mt-4 text-[1.05rem] text-muted-foreground">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
