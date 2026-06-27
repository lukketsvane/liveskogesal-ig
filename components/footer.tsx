"use client"

import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="px-6 py-12 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between">
          {/* Language toggle on the left */}
          <div className="flex items-end">
            <LanguageToggle />
          </div>

          {/* Contact info on the right */}
          <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground font-light">
            <a
              href="https://instagram.com/liveskogesal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 ease-out"
              aria-label="Instagram @liveskogesal"
            >
              <Instagram size={16} strokeWidth={1.5} />
              <span>@liveskogesal</span>
            </a>
            <a
              href="mailto:live9820@hotmail.com"
              className="hover:text-foreground transition-colors duration-300 ease-out"
            >
              {t("footer.email")}
            </a>
            <span className="tracking-wide">{t("footer.copyright")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
