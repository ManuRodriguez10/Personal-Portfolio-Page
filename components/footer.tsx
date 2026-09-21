import Link from "next/link"
import { Geist } from "next/font/google"
import "./footer.css"

const sans = Geist({ subsets: ["latin"], variable: "--footer-sans" })

const footerLinks = [
  { label: "Home", href: "/", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Resume", href: "/resume.pdf", external: false },
  { label: "GitHub", href: "https://github.com/ManuRodriguez10", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manuel-rodriguez-a783b9235/", external: true },
  { label: "Email", href: "mailto:m.rodriguez25@ncf.edu", external: false },
]

export function Footer() {
  return (
    <footer className={`site-footer ${sans.variable}`}>
      <div className="site-footer-inner">
        <div className="site-footer-primary">
          <div className="site-footer-identity">
            <p className="site-footer-name">Manuel Rodriguez</p>
            <p className="site-footer-role">Full-Stack Software Engineer</p>
          </div>
          <nav className="site-footer-links" aria-label="Footer navigation">
            {footerLinks.map((link) => link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ) : link.href.startsWith("/") ? (
              <Link key={link.label} href={link.href}>{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="site-footer-secondary">
          <p>© 2026 Manuel Rodriguez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
