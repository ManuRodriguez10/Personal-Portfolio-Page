"use client"

export function ScrollCue() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>("#project-overview")
    if (!target) return
    event.preventDefault()

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.scrollIntoView()
      history.replaceState(null, "", "#project-overview")
      return
    }

    const start = window.scrollY
    const destination = target.getBoundingClientRect().top + start
    const distance = destination - start
    const duration = 900
    const startedAt = performance.now()

    const glide = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
      window.scrollTo(0, start + distance * eased)
      if (progress < 1) requestAnimationFrame(glide)
      else history.replaceState(null, "", "#project-overview")
    }

    requestAnimationFrame(glide)
  }

  return (
    <a className="case-scroll-cue" href="#project-overview" onClick={handleClick}>
      <span>Scroll to explore</span>
      <span className="case-scroll-arrow" aria-hidden="true">↓</span>
    </a>
  )
}
