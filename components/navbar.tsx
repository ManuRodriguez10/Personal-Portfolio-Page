"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume.pdf" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileMenuOpen])

  const renderLinks = () => navItems.map((item) => {
    const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    return item.href.endsWith(".pdf") ? (
      <a key={item.href} href={item.href} className="portfolio-nav-link" onClick={() => setMobileMenuOpen(false)}>
        {item.label}
      </a>
    ) : (
      <Link key={item.href} href={item.href} className="portfolio-nav-link" data-active={active}
        aria-current={active ? "page" : undefined} onClick={() => setMobileMenuOpen(false)}>
        {item.label}
      </Link>
    )
  })

  return (
    <header className="portfolio-header" data-scrolled={scrolled}>
      <nav className="portfolio-nav" aria-label="Main navigation">
        <Link href="/" className="portfolio-brand">Manuel Rodriguez</Link>
        <div className="portfolio-desktop-links">{renderLinks()}</div>
        <button type="button" className="portfolio-menu-toggle"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="portfolio-mobile-links" aria-label="Mobile navigation">
          {renderLinks()}
        </nav>
      )}
    </header>
  )
}
