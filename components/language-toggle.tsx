"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "no" ? "en" : "no")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
      aria-label={`Switch to ${language === "no" ? "English" : "Norwegian"}`}
    >
      <Globe size={16} />
      <span>{language === "no" ? "EN" : "NO"}</span>
    </button>
  )
}
