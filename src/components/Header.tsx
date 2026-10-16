import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Moon, Sun } from '@/components/icons'
import { NAV, SITE } from '@/data/content'
import { cn } from '@/lib/utils'

function toggleTheme() {
  const root = document.documentElement
  const dark = !root.classList.contains('dark')
  root.classList.toggle('dark', dark)
  try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light') } catch { /* storage unavailable */ }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1220' : '#f8f9fb')
}

export function Header() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section[id]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center gap-6 px-5 sm:px-6">
        <a href="#top" aria-label="Joseph Bautista, back to top" className="flex items-center gap-3 font-semibold">
          <span className="grid size-[34px] place-items-center rounded-lg bg-foreground text-xs font-bold text-background" aria-hidden="true">JB</span>
          <span className="hidden text-[0.97rem] tracking-tight sm:inline">{SITE.name}</span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors [@media(hover:hover)]:hover:bg-secondary [@media(hover:hover)]:hover:text-foreground',
                active === n.href.slice(1) && 'text-primary',
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button variant="outline" size="icon" className="size-11" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            <Sun className="hidden dark:block" aria-hidden="true" />
            <Moon className="dark:hidden" aria-hidden="true" />
          </Button>
          <Button asChild size="sm" className="hidden h-10 sm:inline-flex">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">Book a call</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="size-11 md:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(320px,85vw)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-4">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.href}>
                    <a href={n.href} className="min-h-12 border-b py-3 text-base font-medium">{n.label}</a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-6 h-11">
                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
