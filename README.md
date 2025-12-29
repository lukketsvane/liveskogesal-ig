# liveskogesal.no

Portfolioside for billedvevskunstnar Live Skaar Skogesal.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **pnpm**

## Mappestruktur
```

app/           → Sider og layout
components/    → React-komponentar
lib/           → Hjelpefunksjonar
public/images/ → Alle bilete (JPEG/PNG)
styles/        → CSS

```
## Innhaldsendingar

### Legge til nytt kunstverk

1. Legg biletet i `public/images/` (bruk bindestrek, ikkje mellomrom: `mitt-nye-verk.jpeg`)
2. Oppdater galleridataen i komponenten som viser kunstverk (truleg `components/gallery.tsx` eller liknande)
3. Legg til eit nytt objekt:
   ```ts
   {
     src: "/images/mitt-nye-verk.jpeg",
     title: "Tittel på verket",
     year: "2025",
     dimensions: "100x120 cm"
   }
```

### Fjerne kunstverk

1. Slett objektet frå galleridataen
1. (Valfritt) Slett biletet frå `public/images/`

### Oppdatere tekst (Om meg, CV)

Finn relevant komponent eller side i `app/` eller `components/` og endre teksten direkte.

## Lokal utvikling

```bash
pnpm install    # Installer avhengigheiter (berre fyrste gong)
pnpm dev        # Start lokal server på http://localhost:3000
```

## Deployment

|Branch   |URL                                                           |Miljø     |
|---------|--------------------------------------------------------------|----------|
|`main`   |[liveskogesal.no](https://liveskogesal.no)                    |Produksjon|
|`preview`|[liveskogesal.iverfinne.no](https://liveskogesal.iverfinne.no)|Test      |

### Workflow

1. **Test først**: Push endringar til `preview`-branch → sjekk på [liveskogesal.iverfinne.no](http://liveskogesal.iverfinne.no)
1. **Produksjon**: Merge `preview` → `main` (eller push direkte til `main`)
1. Vercel byggjer og deployer automatisk i løpet av ~1 min

### Quick deploy (utan testing)

```bash
git add .
git commit -m "Lagt til nytt verk"
git push origin main
```

Sida oppdaterast automatisk.

```

