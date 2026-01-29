"use client"

import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiSupabase,
  SiGoogle,
} from "@icons-pack/react-simple-icons"
import { Code2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ComponentType } from "react"

const SKILL_ICON_MAP: Record<string, ComponentType<{ size?: number; color?: string; title?: string }>> = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Django: SiDjango,
  SQL: SiPostgresql,
  Supabase: SiSupabase,
  "Google Workspace": SiGoogle,
  // "Microsoft Office Suite" uses fallback (no Simple Icon)
}

/** Custom image URLs for skills that don't have a Simple Icon (e.g. Cursor) */
const CUSTOM_IMAGE_ICONS: Record<string, string> = {
  Cursor: "https://cursor.com/marketing-static/icon-192x192.png",
}

const FALLBACK_ICON = Code2

function getIconForSkill(skill: string): ComponentType<{ size?: number; color?: string; title?: string }> {
  return SKILL_ICON_MAP[skill] ?? FALLBACK_ICON
}

interface SkillsCarouselProps {
  /** Flattened list of skill names (e.g. from all categories) */
  skills: string[]
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  if (skills.length === 0) return null

  const items = skills.map((name) => ({
    name,
    Icon: getIconForSkill(name),
    imageSrc: CUSTOM_IMAGE_ICONS[name],
  }))

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className="flex w-max gap-12 pr-12"
        style={{
          animation: "skills-carousel-scroll 40s linear infinite",
        }}
      >
        {/* First set */}
        {items.map((item) => (
          <SkillItem key={`a-${item.name}`} name={item.name} Icon={item.Icon} imageSrc={item.imageSrc} />
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item) => (
          <SkillItem key={`b-${item.name}`} name={item.name} Icon={item.Icon} imageSrc={item.imageSrc} />
        ))}
      </div>
    </div>
  )
}

function SkillItem({
  name,
  Icon,
  imageSrc,
}: {
  name: string
  Icon: ComponentType<{ size?: number; color?: string; title?: string }> | LucideIcon
  imageSrc?: string
}) {
  const isLucideFallback = Icon === FALLBACK_ICON
  const IconComponent = Icon
  return (
    <div
      className="flex flex-shrink-0 items-center gap-3 rounded-2xl border border-border/30 bg-card/50 px-6 py-4 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-card/80"
      title={name}
    >
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-muted-foreground [&>svg]:h-8 [&>svg]:w-8">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
          />
        ) : isLucideFallback ? (
          <IconComponent className="h-8 w-8" />
        ) : (
          <IconComponent color="currentColor" size={32} title={name} />
        )}
      </span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}
