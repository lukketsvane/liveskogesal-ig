"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "no" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  no: {
    // Navigation
    "nav.projects": "Prosjekter",
    "nav.about": "Om meg",
    "nav.cv": "CV",

    // Header
    "header.title": "LIVE SKAAR SKOGESAL",

    // About section
    "about.title": "Live Skogesal",
    "about.intro":
      "Jeg er en nyutdannet kunstner fra kunsthøgskolen i Bergen som bor og arbeider på Nordnes i Bergen. I min kunstneriske praksis jobber jeg med kunsthåndverk med hovedfokus på billedvev.",
    "about.description":
      "Mine arbeider handler om hvordan historiske hendelser og fortellinger preger måten vi i dag ser på verden. Arbeidene tar for seg personlige erfaringer som gjennom et historisk blikk gjøres universelle og mer tilgjengelige.",

    // Work process section
    "process.title": "Arbeidsprosess",
    "process.paragraph1":
      "Min arbeidsprosess starter med å male og planlegge motiv. Neste steg er å farge garn, både ved hjelp av historiske plantefargingsteknikker og moderne syrefarging. Deretter vever jeg bilder for hånd på oppstadvev.",
    "process.paragraph2":
      "Dette er en tidkrevende prosess som gir tid til refleksjon. I mitt arbeid viderefører jeg kunnskap som har vært nedarvet gjennom titalls generasjoner. Dette er kunnskap som holder på å gå tapt.",
    "process.paragraph3":
      "Når jeg vever melerer jeg garnet for å oppnå spill og kontraster i uttrykket. For å skape struktur i overflaten blander jeg inn andre materialer som glittergarn og blank viskose.",
    "process.paragraph4":
      "Arbeidene tar for seg personlige erfaringer som gjennom et historisk blikk gjøres universelle og mer tilgjengelige.",

    // CV section
    "cv.title": "CV",
    "cv.education": "Utdannelse",
    "cv.education.bachelor": "Bachelor i Kunst",
    "cv.education.bachelor.school": "Universitetet i Bergen, 2020-2023",
    "cv.education.literature": "Årsstudium i litteraturvitenskap",
    "cv.education.literature.school": "Universitetet i Bergen, 2019-2020",
    "cv.education.visual": "Visuelle kunstfag",
    "cv.education.visual.school": "Kunstskolen i Bergen, 2017-2019",

    "cv.awards": "Utmerkelser og stipend",
    "cv.awards.best": '"Årets beste kunstopplevelser 2024"',
    "cv.awards.best.source": "kunstavisen.no",
    "cv.awards.dream": "Drømmestipendet 2024",
    "cv.awards.production": "Produksjonsstipend 2024",
    "cv.awards.production.source": "Buskerud kunstsenter",
    "cv.awards.debut": "Årets Debutant",
    "cv.awards.debut.source": "Novemberutstillingen 2023",

    "cv.upcoming": "Kommende utstillinger",
    "cv.upcoming.usf": "Visningsrommet USF (separatutstilling)",
    "cv.upcoming.usf.date": "Februar 2026",
    "cv.upcoming.skog": "Skog Art Space (separatutstilling)",
    "cv.upcoming.skog.date": "Mars 2026",
    "cv.upcoming.jessheim": "Galleri Jessheim",
    "cv.upcoming.jessheim.date": "Mai 2026",
    "cv.upcoming.soft": "SOFT galleri (separatutstilling)",
    "cv.upcoming.soft.date": "Januar 2027",

    "cv.selected": "Utvalgte utstillinger",
    "cv.selected.autumn": "Høstutstillingen",
    "cv.selected.autumn.venue": "Kunstnernes hus, September 2025",
    "cv.selected.ostland": "Østlandsutstillingen",
    "cv.selected.ostland.venue": "Kunstbanken senter for samtidskunst, 2024",
    "cv.selected.secondskin": "Second Skin; Encounters",
    "cv.selected.secondskin.venue": "Kode, 2023",
    "cv.selected.tapestry": "Kate Derum and Irene Davies International Tapestry Awards 2024",
    "cv.selected.tapestry.venue": "Australian Tapestry workshop, South Melbourne",

    // Footer
    "footer.instagram": "Instagram liveskogesal",
    "footer.email": "Email live9820@hotmail.com",
    "footer.copyright": "2025 © Live Skogesal",

    // Lightbox
    "lightbox.photo": "Foto:",
    "lightbox.detail": "Detalj",
    "lightbox.showDetail": "Show detail",
    "lightbox.showMain": "Show main image",
    "lightbox.hideDetails": "Hide details",
    "lightbox.showDetails": "Show details",
    "lightbox.previous": "Previous image",
    "lightbox.next": "Next image",
    "lightbox.close": "Close",
    "lightbox.viewArtwork": "View artwork",
  },
  en: {
    // Navigation
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.cv": "CV",

    // Header
    "header.title": "LIVE SKAAR SKOGESAL",

    // About section
    "about.title": "Live Skogesal",
    "about.intro":
      "I am a newly graduated artist from the Art Academy in Bergen who lives and works in Nordnes, Bergen. In my artistic practice, I work with crafts with a main focus on tapestry weaving.",
    "about.description":
      "My works deal with how historical events and stories influence the way we see the world today. The works address personal experiences that through a historical perspective are made universal and more accessible.",

    // Work process section
    "process.title": "Work Process",
    "process.paragraph1":
      "My work process starts with painting and planning motifs. The next step is to dye yarn, both using historical plant dyeing techniques and modern acid dyeing. Then I weave images by hand on an upright loom.",
    "process.paragraph2":
      "This is a time-consuming process that allows time for reflection. In my work, I pass on knowledge that has been inherited through dozens of generations. This is knowledge that is about to be lost.",
    "process.paragraph3":
      "When I weave, I blend the yarn to achieve play and contrasts in the expression. To create structure in the surface, I mix in other materials such as glitter yarn and shiny viscose.",
    "process.paragraph4":
      "The works address personal experiences that through a historical perspective are made universal and more accessible.",

    // CV section
    "cv.title": "CV",
    "cv.education": "Education",
    "cv.education.bachelor": "Bachelor in Art",
    "cv.education.bachelor.school": "University of Bergen, 2020-2023",
    "cv.education.literature": "Year of Literary Studies",
    "cv.education.literature.school": "University of Bergen, 2019-2020",
    "cv.education.visual": "Visual Arts",
    "cv.education.visual.school": "Art School in Bergen, 2017-2019",

    "cv.awards": "Awards and Grants",
    "cv.awards.best": '"Best Art Experiences of 2024"',
    "cv.awards.best.source": "kunstavisen.no",
    "cv.awards.dream": "Dream Grant 2024",
    "cv.awards.production": "Production Grant 2024",
    "cv.awards.production.source": "Buskerud Art Center",
    "cv.awards.debut": "Debut of the Year",
    "cv.awards.debut.source": "November Exhibition 2023",

    "cv.upcoming": "Upcoming Exhibitions",
    "cv.upcoming.usf": "Visningsrommet USF (solo exhibition)",
    "cv.upcoming.usf.date": "February 2026",
    "cv.upcoming.skog": "Skog Art Space (solo exhibition)",
    "cv.upcoming.skog.date": "March 2026",
    "cv.upcoming.jessheim": "Gallery Jessheim",
    "cv.upcoming.jessheim.date": "May 2026",
    "cv.upcoming.soft": "SOFT Gallery (solo exhibition)",
    "cv.upcoming.soft.date": "January 2027",

    "cv.selected": "Selected Exhibitions",
    "cv.selected.autumn": "Autumn Exhibition",
    "cv.selected.autumn.venue": "Artists' House, September 2025",
    "cv.selected.ostland": "Eastern Norway Exhibition",
    "cv.selected.ostland.venue": "Kunstbanken Center for Contemporary Art, 2024",
    "cv.selected.secondskin": "Second Skin; Encounters",
    "cv.selected.secondskin.venue": "Kode, 2023",
    "cv.selected.tapestry": "Kate Derum and Irene Davies International Tapestry Awards 2024",
    "cv.selected.tapestry.venue": "Australian Tapestry workshop, South Melbourne",

    // Footer
    "footer.instagram": "Instagram liveskogesal",
    "footer.email": "Email live9820@hotmail.com",
    "footer.copyright": "2025 © Live Skogesal",

    // Lightbox
    "lightbox.photo": "Photo:",
    "lightbox.detail": "Detail",
    "lightbox.showDetail": "Show detail",
    "lightbox.showMain": "Show main image",
    "lightbox.hideDetails": "Hide details",
    "lightbox.showDetails": "Show details",
    "lightbox.previous": "Previous image",
    "lightbox.next": "Next image",
    "lightbox.close": "Close",
    "lightbox.viewArtwork": "View artwork",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en") // Set English as default

  useEffect(() => {
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "no" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
