"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { instagramPosts } from "@/lib/instagram-posts"

const BATCH_SIZE = 12

export function Updates() {
  const { t } = useLanguage()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)

  const visiblePosts = instagramPosts.slice(0, visibleCount)
  const hasMore = visibleCount < instagramPosts.length

  return (
    <section id="oppdateringer" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground mb-12 tracking-wide font-archivo">
          {t("updates.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {visiblePosts.map((post) => (
            <a
              key={post.code}
              href={`https://www.instagram.com/p/${post.code}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={`/images/updates/${post.code}.jpg`}
                alt="Instagram-innlegg fra @liveskogesal"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/30">
                <Instagram
                  size={22}
                  strokeWidth={1.5}
                  className="text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>
              {post.isVideo && (
                <div className="absolute top-2 right-2">
                  <Play size={16} className="text-white drop-shadow" fill="white" />
                </div>
              )}
            </a>
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
