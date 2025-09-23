"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronLeft, ChevronRight, Search } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)

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
      photographer: "Øystein Thorvaldsen",
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
      photographer: "Øystein Thorvaldsen",
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
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Øystein Thorvaldsen",
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
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      image: "/images/kyss-meg.jpeg",
      detailImage: "/images/detalj-kyss-meg.png",
      aspectRatio: "1/1",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setShowDetails(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setShowDetails(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % artworks.length)
      setShowDetails(false)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? artworks.length - 1 : selectedImage - 1)
      setShowDetails(false)
    }
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-light text-foreground tracking-wider">LIVE SKAAR SKOGESAL</h1>

            {/* Desktop Navigation - Per Finne style */}
            <nav className="hidden md:flex gap-12 text-sm font-light">
              <a
                href="#prosjekter"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                Prosjekter
              </a>
              <a
                href="#om-meg"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                Om meg
              </a>
              <a
                href="#cv"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
              >
                CV
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
                Prosjekter
              </a>
              <a
                href="#om-meg"
                className="block text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Om meg
              </a>
              <a
                href="#cv"
                className="block text-lg font-light text-muted-foreground hover:text-foreground transition-all duration-300 ease-out tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                CV
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
                        <Search
                          className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-75 group-hover:scale-100 md:relative absolute bottom-4 right-4 md:bottom-auto md:right-auto"
                          size={20}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <h3 className="text-white text-sm font-light line-clamp-2 leading-relaxed mb-1 text-left">
                        {artwork.title}
                      </h3>
                      <p className="text-white/80 text-xs font-light text-left">{artwork.year}</p>
                      {artwork.dimensions && (
                        <p className="text-white/60 text-xs font-light text-left">{artwork.dimensions}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-light text-foreground line-clamp-2 leading-relaxed text-left">
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image src="/images/portrett-live.jpeg" alt="Live Skaar Skogesal" fill className="object-cover" />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-foreground tracking-wide">Billedvev</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                  <p>
                    Jeg er en nyutdannet kunstner fra kunsthøgskolen i Bergen som bor og arbeider på Nordnes i Bergen. I
                    min kunstneriske praksis jobber jeg med kunsthåndverk med hovedfokus på billedvev.
                  </p>
                  <p>
                    Mine arbeider handler om hvordan historiske hendelser og fortellinger preger måten vi i dag ser på
                    verden. Arbeidene tar for seg personlige erfaringer som gjennom et historisk blikk gjøres
                    universelle og mer tilgjengelige.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="om-meg" className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide">Arbeidsprosess</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>
                  Min arbeidsprosess starter med å male og planlegge motiv. Neste steg er å farge garn, både ved hjelp
                  av historiske plantefargingsteknikker og moderne syrefarging. Deretter vever jeg bilder for hånd på
                  oppstadvev.
                </p>
                <p>
                  Dette er en tidkrevende prosess som gir tid til refleksjon. I mitt arbeid viderefører jeg kunnskap som
                  har vært nedarvet gjennom titalls generasjoner. Dette er kunnskap som holder på å gå tapt.
                </p>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>
                  Når jeg vever melerer jeg garnet for å oppnå spill og kontraster i uttrykket. For å skape struktur i
                  overflaten blander jeg inn andre materialer som glittergarn og blank viskose.
                </p>
                <p>
                  Arbeidene tar for seg personlige erfaringer som gjennom et historisk blikk gjøres universelle og mer
                  tilgjengelige.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="px-6 py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide text-left">CV</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left">Utdannelse</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">Bachelor i Kunst</p>
                      <p className="text-sm text-muted-foreground font-light">Universitetet i Bergen, 2020-2023</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Årsstudium i litteraturvitenskap</p>
                      <p className="text-sm text-muted-foreground font-light">Universitetet i Bergen, 2019-2020</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Visuelle kunstfag</p>
                      <p className="text-sm text-muted-foreground font-light">Kunstskolen i Bergen, 2017-2019</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left">
                    Utmerkelser og stipend
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">"Årets beste kunstopplevelser 2024"</p>
                      <p className="text-sm text-muted-foreground font-light">kunstavisen.no</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Drømmestipendet 2024</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Produksjonsstipend 2024</p>
                      <p className="text-sm text-muted-foreground font-light">Buskerud kunstsenter</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Årets Debutant</p>
                      <p className="text-sm text-muted-foreground font-light">Novemberutstillingen 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left">
                    Kommende utstillinger
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">Visningsrommet USF (separatutstilling)</p>
                      <p className="text-sm text-muted-foreground font-light">Februar 2026</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Skog Art Space (separatutstilling)</p>
                      <p className="text-sm text-muted-foreground font-light">Mars 2026</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Galleri Jessheim</p>
                      <p className="text-sm text-muted-foreground font-light">Mai 2026</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">SOFT galleri (separatutstilling)</p>
                      <p className="text-sm text-muted-foreground font-light">Januar 2027</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide text-left">
                    Utvalgte utstillinger
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-light text-foreground">Høstutstillingen</p>
                      <p className="text-sm text-muted-foreground font-light">Kunstnernes hus, September 2025</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Østlandsutstillingen</p>
                      <p className="text-sm text-muted-foreground font-light">
                        Kunstbanken senter for samtidskunst, 2024
                      </p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">Second Skin; Encounters</p>
                      <p className="text-sm text-muted-foreground font-light">Kode, 2023</p>
                    </div>
                    <div>
                      <p className="font-light text-foreground">
                        Kate Derum and Irene Davies International Tapestry Awards 2024
                      </p>
                      <p className="text-sm text-muted-foreground font-light">
                        Australian Tapestry workshop, South Melbourne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground font-light tracking-wide">© Live Skaar Skogesal</p>
          </div>
        </footer>
      </main>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={prevImage}
                className="p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {artworks[selectedImage].detailImage && (
                <button
                  onClick={toggleDetails}
                  className={`p-2 md:p-3 rounded-full transition-all duration-200 touch-manipulation md:relative absolute bottom-4 right-16 md:bottom-auto md:right-auto ${
                    showDetails ? "text-primary bg-primary/20" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={showDetails ? "Show main image" : "Show detail"}
                >
                  <Search size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              )}
              <button
                onClick={closeLightbox}
                className="p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 touch-manipulation"
                aria-label="Close"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>

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
                    ? `${artworks[selectedImage].title} - Detalj`
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
            <div className="max-w-4xl mx-auto text-left md:text-center">
              <h3 className="text-white text-base md:text-lg font-light mb-2 leading-tight text-left md:text-center">
                {artworks[selectedImage].title}
              </h3>
              <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-1 md:gap-3 text-sm text-white/80 font-light mb-2">
                <span>{artworks[selectedImage].year}</span>
                {artworks[selectedImage].dimensions && (
                  <>
                    <span className="hidden md:inline text-white/40">•</span>
                    <span>{artworks[selectedImage].dimensions}</span>
                  </>
                )}
                {artworks[selectedImage].photographer && (
                  <>
                    <span className="hidden md:inline text-white/40">•</span>
                    <span>Foto: {artworks[selectedImage].photographer}</span>
                  </>
                )}
              </div>
              {artworks[selectedImage].materials && (
                <p className="text-white/70 text-sm font-light mb-1 text-left md:text-center">
                  {artworks[selectedImage].materials}
                </p>
              )}
              {artworks[selectedImage].description && (
                <p className="text-white/60 text-sm font-light text-left md:text-center">
                  {artworks[selectedImage].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
