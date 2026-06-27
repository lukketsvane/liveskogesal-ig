"use client"

import { useCallback, useEffect, useRef, useState } from "react"
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
    <div className="mb-4 break-inside-avoid">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/p/${code}/`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 4,
          boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)",
          margin: 0,
          maxWidth: "100%",
          minWidth: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <a href={`https://www.instagram.com/p/${code}/`} target="_blank" rel="noopener noreferrer">
          Vis innlegget på Instagram
        </a>
      </blockquote>
    </div>
  )
}

export function Updates() {
  const { t } = useLanguage()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)

  // Ask Instagram's embed script to (re)render any unprocessed blockquotes.
  const processEmbeds = useCallback(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return true
    }
    return false
  }, [])

  // Load the embed script once, then process. Retry briefly in case the
  // script is still downloading when the first blockquotes are mounted.
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    )
    if (!existing) {
      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      script.onload = () => processEmbeds()
      document.body.appendChild(script)
    }

    let tries = 0
    const interval = setInterval(() => {
      tries += 1
      if (processEmbeds() || tries > 20) {
        clearInterval(interval)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [processEmbeds])

  // Re-process whenever a new batch becomes visible.
  useEffect(() => {
    processEmbeds()
  }, [visibleCount, processEmbeds])

  const visiblePosts = instagramPosts.slice(0, visibleCount)
  const hasMore = visibleCount < instagramPosts.length

  return (
    <section id="oppdateringer" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide font-archivo">
          {t("updates.title")}
        </h2>

        <div className="columns-2 lg:columns-3 xl:columns-4 gap-4">
          {visiblePosts.map((post) => (
            <InstagramEmbed key={post.code} code={post.code} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => Math.min(c + BATCH_SIZE, instagramPosts.length))}
              className="px-8 py-3 text-sm font-light tracking-wide text-foreground border border-border/60 hover:border-foreground/40 hover:bg-background/60 transition-all duration-300 ease-out"
            >
              {t("updates.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
