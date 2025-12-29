"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ChevronLeft, ChevronRight, Info } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function Portfolio() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showMobileInfo, setShowMobileInfo] = useState(false)

  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const touchEndY = useRef<number>(0)
  const minSwipeDistance = 50

  const artworks = [
    {
      id: 1,
      title: "Likesom hjorten stunder etter bekker med rennende vann, slik stunder også min sjel etter deg",
      year: "2024",
      dimensions: "140x170 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Vegard Kleven",
      image: "/images/slik-hjorten.jpeg",
      detailImage: "/images/detalj-slik-hjorten.png",
      aspectRatio: "4/5",
    },
    {
      id: 2,
      title: "Eg drøymer meg burt",
      year: "2024",
      dimensions: "112 x 101 cm",
      materials: "Plantefarget garn, håndfarget garn, lin og nylon",
      photographer: "Vegard Kleven",
      image: "/images/eg-droymer-meg-bort.png",
      detailImage: "/images/detalj-eg-droymer-meg-bort.jpeg",
      aspectRatio: "1/1",
    },
    {
      id: 4,
      title: "Vinternatt i rondane",
      year: "2024",
      dimensions: "45x45 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Vegard Kleven",
      description: 'Billedveven er en studie av Harald Sohlbergs "Vinternatt i Rondane"',
      image: "/images/vinternatt-rondane.jpeg",
      detailImage: "/images/detalj-vinternatt.png",
      aspectRatio: "1/1",
    },
    {
      id: 5,
      title: "Vannliljer",
      year: "2024",
      dimensions: "45x45 cm",
      materials: "Plantefarget garn, håndfarget garn, nylon og lin",
      photographer: "Vegard Kleven",
      description: "Billedveven er inspirert av Theodor Kittelsen og hans nøkkel",
      image: "/images/vannliljer.png",
      detailImage: "/images/detalj-vannlilje.png",
      aspectRatio: "1/1",
    },
    {
      id: 6,
      title: "Kyss meg",
      year: "2024",
      dimensions: "58x56 cm",
      materials: "Plantefarget garn, håndfarget garn, nylon og lin",
      photographer: "Øystein Thorvaldsen",
      image: "/images/kyss-meg.jpeg",
      detailImage: "/images/detalj-kyss-meg.png",
      aspectRatio: "1/1",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setShowDetails(false)
    setShowMobileInfo(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setShowDetails(false)
    setShowMobileInfo(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % artworks.length)
      setShowDetails(false)
      setShowMobileInfo(false)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? artworks.length - 1 : selectedImage - 1)
      setShowDetails(false)
      setShowMobileInfo(false)
    }
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const toggleMobileInfo = () => {
    setShowMobileInfo(!showMobileInfo)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchStartY.current = e.targetTouches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
    touchEndY.current = e.targetTouches[0].clientY
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distanceX = touchStartX.current - touchEndX.current
    const distanceY = touchStartY.current - touchEndY.current
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX)

    // Only handle horizontal swipes, ignore vertical ones
    if (!isVerticalSwipe) {
      if (isLeftSwipe && selectedImage !== null) {
        nextImage()
      }
      if (isRightSwipe && selectedImage !== null) {
        prevImage()
      }
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "ArrowLeft":
          prevImage()
          break
        case "ArrowRight":
          nextImage()
          break
        case "Escape":
          closeLightbox()
          break
        case " ":
          e.preventDefault()
          if (artworks[selectedImage].detailImage) {
            toggleDetails()
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, showDetails])

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-light text-foreground tracking-wider font-archivo">{t("header.title")}</h1>

            {/* Desktop Navigation - Per Finne style */}
            <nav className="hidden md:flex gap-12 text-sm font-light">
              <a
                href="#prosjekter"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#om-meg"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                {t("nav.about")}
              </a>
              <a
                href="#cv"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                {t("nav.cv")}
              </a>
            </nav>

            {/* Mobile Menu Button with smooth animation */}
            <button
              className="md:hidden p-2 transition-all duration-300 ease-out text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-all duration-500 ease-out ${isMenuOpen ? "rotate-90 scale-110" : ""}`}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with smooth slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/98 backdrop-blur-sm border-t border-border/50">
            <nav className="max-w-7xl mx-auto px-6 py-8 space-y-6">
              <a
                href="#prosjekter"
                className="block text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.projects")}
              </a>
              <a
                href="#om-meg"
                className="block text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#cv"
                className="block text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.cv")}
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <section id="prosjekter" className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {artworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="group cursor-pointer break-inside-avoid mb-8"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden bg-muted transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <div className="relative w-full" style={{ aspectRatio: artwork.aspectRatio }}>
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-out flex items-center justify-center md:flex md:items-center md:justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-75 group-hover:scale-100 md:relative absolute bottom-4 right-4 md:bottom-auto md:right-auto">
                          <Image
                            src="/images/magnifying-glass-icon.png"
                            alt="View artwork"
                            width={20}
                            height={20}
                            className="filter invert brightness-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <h3 className="text-white text-sm font-light line-clamp-2 leading-relaxed mb-1 text-left font-archivo">
                        {artwork.title}
                      </h3>
                      <p className="text-white/80 text-xs font-light text-left">{artwork.year}</p>
                      {artwork.dimensions && (
                        <p className="text-white/60 text-xs font-light text-left">{artwork.dimensions}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-light text-foreground line-clamp-2 leading-relaxed text-left font-archivo">
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light text-left">{artwork.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div id="om-meg" className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image src="/images/portrett-live.jpeg" alt="Live Skaar Skogesal" fill className="object-cover" />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-foreground tracking-wide font-archivo">{t("about.title")}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                  <p>{t("about.intro")}</p>
                  <p>{t("about.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide font-archivo">
              {t("process.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>{t("process.paragraph1")}</p>
                <p>{t("process.paragraph2")}</p>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>{t("process.paragraph3")}</p>
                <p>{t("process.paragraph4")}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="px-6 py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide text-left font-archivo">
              {t("cv.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left font-archivo">
                    {t("cv.education")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">{t("cv.education.bachelor")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.education.bachelor.school")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.education.literature")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.education.literature.school")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.education.visual")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.education.visual.school")}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left font-archivo">
                    {t("cv.awards")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">{t("cv.awards.best")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.awards.best.source")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.awards.dream")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.awards.production")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.awards.production.source")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.awards.debut")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.awards.debut.source")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left font-archivo">
                    {t("cv.upcoming")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">{t("cv.upcoming.usf")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.upcoming.usf.date")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.upcoming.skog")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.upcoming.skog.date")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.upcoming.jessheim")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.upcoming.jessheim.date")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.upcoming.soft")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.upcoming.soft.date")}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left font-archivo">
                    {t("cv.selected")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">{t("cv.selected.autumn")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.selected.autumn.venue")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.selected.ostland")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.selected.ostland.venue")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.selected.secondskin")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.selected.secondskin.venue")}</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">{t("cv.selected.tapestry")}</p>
                      <p className="text-sm text-muted-foreground font-light">{t("cv.selected.tapestry.venue")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end justify-between">
              {/* Language toggle on the left */}
              <div className="flex items-end">
                <LanguageToggle />
              </div>

              {/* Contact info on the right */}
              <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground font-light">
                <span>{t("footer.instagram")}</span>
                <span>{t("footer.email")}</span>
                <span className="tracking-wide">{t("footer.copyright")}</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={prevImage}
                className="p-3 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={t("lightbox.previous")}
              >
                <ChevronLeft size={20} className="md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="p-3 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={t("lightbox.next")}
              >
                <ChevronRight size={20} className="md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={closeLightbox}
                className="p-3 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={t("lightbox.close")}
              >
                <X size={20} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {artworks[selectedImage].detailImage && (
            <div className="fixed bottom-6 right-6 md:absolute md:top-4 md:right-20 md:bottom-auto flex items-center gap-2 z-20">
              <button
                onClick={toggleMobileInfo}
                className="xs:hidden p-3 text-white/60 hover:text-white/80 rounded-full transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/20 backdrop-blur-sm"
                style={{ display: window.innerWidth <= 375 ? "flex" : "none" }}
                aria-label={showMobileInfo ? t("lightbox.hideDetails") : t("lightbox.showDetails")}
              >
                <Info size={16} />
              </button>

              <button
                onClick={toggleDetails}
                className="p-3 rounded-full transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={showDetails ? t("lightbox.showMain") : t("lightbox.showDetail")}
              >
                <Image
                  src={showDetails ? "/images/ant-icon.png" : "/images/magnifying-glass-icon.png"}
                  alt={showDetails ? t("lightbox.showMain") : t("lightbox.showDetail")}
                  width={18}
                  height={18}
                  className="filter invert brightness-0"
                />
              </button>
            </div>
          )}

          <div className="w-full h-full flex items-center justify-center p-4 md:p-20">
            <div className="relative max-w-full max-h-full">
              <Image
                src={
                  showDetails && artworks[selectedImage].detailImage
                    ? artworks[selectedImage].detailImage
                    : artworks[selectedImage].image
                }
                alt={
                  showDetails && artworks[selectedImage].detailImage
                    ? `${artworks[selectedImage].title} - ${t("lightbox.detail")}`
                    : artworks[selectedImage].title
                }
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-white text-base md:text-lg font-light mb-2 leading-tight text-left font-archivo">
                {artworks[selectedImage].title}
              </h3>

              <div className="block" style={{ display: window.innerWidth <= 375 ? "block" : "none" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/80 font-light">{artworks[selectedImage].year}</span>
                </div>

                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    showMobileInfo ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 pt-2 border-t border-white/20">
                    {artworks[selectedImage].dimensions && (
                      <span className="block text-sm text-white/80 font-light">
                        {artworks[selectedImage].dimensions}
                      </span>
                    )}
                    {artworks[selectedImage].photographer && (
                      <span className="block text-sm text-white/80 font-light">
                        {t("lightbox.photo")} {artworks[selectedImage].photographer}
                      </span>
                    )}
                    {artworks[selectedImage].materials && (
                      <p className="text-white/70 text-sm font-light text-left">{artworks[selectedImage].materials}</p>
                    )}
                    {artworks[selectedImage].description && (
                      <p className="text-white/60 text-sm font-light text-left">
                        {artworks[selectedImage].description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="block" style={{ display: window.innerWidth > 375 ? "block" : "none" }}>
                <div className="flex flex-col gap-1 text-sm text-white/80 font-light mb-2">
                  <span>{artworks[selectedImage].year}</span>
                  {artworks[selectedImage].dimensions && <span>{artworks[selectedImage].dimensions}</span>}
                  {artworks[selectedImage].photographer && (
                    <span>
                      {t("lightbox.photo")} {artworks[selectedImage].photographer}
                    </span>
                  )}
                </div>
                {artworks[selectedImage].materials && (
                  <p className="text-white/70 text-sm font-light mb-1 text-left">{artworks[selectedImage].materials}</p>
                )}
                {artworks[selectedImage].description && (
                  <p className="text-white/60 text-sm font-light text-left">{artworks[selectedImage].description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
