import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { label: "GitHub", href: "#github-placeholder", icon: Github },
  { label: "LinkedIn", href: "#linkedin-placeholder", icon: Linkedin },
  { label: "Twitter", href: "#twitter-placeholder", icon: Twitter },
  { label: "Email", href: "mailto:placeholder@example.com", icon: Mail },
]

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold text-primary">Y</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Your Name</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover-underline inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-icon flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
