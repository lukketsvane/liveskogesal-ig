"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { instagramPosts } from "@/lib/instagram-posts"

const BATCH_SIZE = 12

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

function InstagramEmbed({ code }: { code: string }) {
  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink={`https://www.instagram.com/p/${code}/`}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: 0,
        maxWidth: 540,
        minWidth: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <a href={`https://www.instagram.com/p/${code}/`} target="_blank" rel="noopener noreferrer">
        Vis innlegget på Instagram
      </a>
    </blockquote>
  )
}

export function Updates() {
  const { t } = useLanguage()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const scriptLoaded = useRef(false)

  // Load the Instagram embed script once.
  useEffect(() => {
    if (scriptLoaded.current) return
    if (window.instgrm) {
      scriptLoaded.current = true
      return
    }
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]')
    if (existing) {
      scriptLoaded.current = true
      return
    }
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
    scriptLoaded.current = true
  }, [])

  // Re-process embeds whenever more posts become visible.
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [visibleCount])

  const visiblePosts = instagramPosts.slice(0, visibleCount)
  const hasMore = visibleCount < instagramPosts.length

  return (
    <section id="oppdateringar" className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide font-archivo">
          {t("updates.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {visiblePosts.map((post) => (
            <InstagramEmbed key={post.code} code={post.code} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => Math.min(c + BATCH_SIZE, instagramPosts.length))}
              className="px-8 py-3 text-sm font-light tracking-wide text-foreground border border-border/60 hover:border-foreground/40 hover:bg-secondary/40 transition-all duration-300 ease-out"
            >
              {t("updates.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
