"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const artworks = [
    {
      id: 1,
      title: "Likesom hjorten stunder etter bekker med rennende vann, slik stunder også min sjel etter deg",
      year: "2024",
      dimensions: "140x170 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Vegard Kleven",
      image: "/images/tapestry-1.png",
    },
    {
      id: 2,
      title: "Eg drøymer meg burt",
      year: "2024",
      dimensions: "112 x 101 cm",
      materials: "Plantefarget garn, håndfarget garn, lin og nylon",
      photographer: "Øystein Thorvaldsen",
      image: "/images/eg-droymer.png",
    },
    {
      id: 3,
      title: "Du som bur meg i hjarta inne magti fekk yvi alt mitt minne",
      year: "2024",
      dimensions: "105x119 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Øystein Thorvaldsen",
      image: "/images/som-bur-meg-gallery.jpeg",
    },
    {
      id: 4,
      title: "Vinternatt i rondane",
      year: "2024",
      dimensions: "45x45 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Øystein Thorvaldsen",
      description: 'Billedveven er en studie av Harald Sohlbergs "Vinternatt i Rondane"',
      image: "/images/vinternatt.png",
    },
    {
      id: 5,
      title: "Vannliljer",
      year: "2024",
      dimensions: "45x45 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      photographer: "Øystein Thorvaldsen",
      description: "Billedveven er inspirert av Theodor Kittelsen og hans nøkken",
      image: "/images/vannliljer-new.png",
    },
    {
      id: 6,
      title: "Kyss meg",
      year: "2024",
      dimensions: "58x56 cm",
      materials: "Plantefarget og håndfarget garn, nylon og lin",
      image: "/images/kyss-meg.jpeg",
    },
    {
      id: 7,
      title: "Textile Detail I",
      year: "2024",
      materials: "Plantefarget og håndfarget garn",
      image: "/images/detail-1.jpeg",
    },
    {
      id: 8,
      title: "Textile Detail II",
      year: "2024",
      materials: "Plantefarget og håndfarget garn",
      image: "/images/textile-detail-colorful.jpeg",
    },
    {
      id: 9,
      title: "Textile Detail III",
      year: "2024",
      materials: "Plantefarget og håndfarget garn",
      image: "/images/textile-detail-blue.jpeg",
    },
    {
      id: 10,
      title: "Hands at Work",
      year: "2024",
      materials: "Plantefarget og håndfarget garn",
      image: "/images/hands-weaving.jpeg",
    },
  ]

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {artworks.map((artwork) => (
                <div key={artwork.id} className="group cursor-pointer">
                  <div className="relative aspect-square bg-muted rounded-sm overflow-hidden">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-light text-foreground line-clamp-2 leading-relaxed">{artwork.title}</h3>
                    <p className="text-xs text-muted-foreground font-light">{artwork.year}</p>
                    {artwork.dimensions && (
                      <p className="text-xs text-muted-foreground/70 font-light">{artwork.dimensions}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-muted">
                <Image src="/images/portrait-live.jpeg" alt="Live Skaar Skogesal" fill className="object-cover" />
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

        {/* About Section */}
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

        {/* CV Section */}
        <section id="cv" className="px-6 py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide">CV</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide">Utdannelse</h3>
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
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide">Utmerkelser og stipend</h3>
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
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide">Kommende utstillinger</h3>
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
                  <h3 className="text-xl font-light text-foreground mb-6 tracking-wide">Utvalgte utstillinger</h3>
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

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground font-light tracking-wide">© Live Skaar Skogesal</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
