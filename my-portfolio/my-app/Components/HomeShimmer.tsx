import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./HomeShimmer.css"

const HomeShimmer = () => {
  const isHome = useLocation().pathname === "/"
  const [hasShown, setHasShown] = useState(false)
  const visible = isHome && !hasShown

  useEffect(() => {
    if (!isHome || !visible) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => setHasShown(true), 0)
      return () => window.clearTimeout(timer)
    }

    const photo = document.querySelector<HTMLImageElement>(".hero-photo")
    const content = document.querySelector<HTMLElement>(".site-content")
    if (content) content.inert = true
    const started = performance.now()
    let revealTimer: number | undefined
    const fallbackTimer = window.setTimeout(() => setHasShown(true), 1800)

    const reveal = () => {
      window.clearTimeout(fallbackTimer)
      revealTimer = window.setTimeout(
        () => setHasShown(true),
        Math.max(0, 320 - (performance.now() - started)),
      )
    }

    if (!photo || photo.complete) reveal()
    else {
      photo.addEventListener("load", reveal, { once: true })
      photo.addEventListener("error", reveal, { once: true })
    }

    return () => {
      if (content) content.inert = false
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(revealTimer)
      photo?.removeEventListener("load", reveal)
      photo?.removeEventListener("error", reveal)
    }
  }, [isHome, visible])

  if (!isHome || !visible) return null

  return (
    <div className="home-shimmer" role="status" aria-label="Loading homepage">
      <div className="home-shimmer-inner" aria-hidden="true">
        <div className="home-shimmer-nav">
          <div className="home-shimmer-brand">
            <span className="shimmer-block home-shimmer-brand-name" />
            <span className="shimmer-block home-shimmer-brand-role" />
          </div>
          <div className="home-shimmer-nav-links">
            <span className="shimmer-block" /><span className="shimmer-block" /><span className="shimmer-block" />
          </div>
          <div className="home-shimmer-nav-actions">
            <span className="shimmer-block home-shimmer-round" />
            <span className="shimmer-block home-shimmer-nav-pill" />
            <span className="shimmer-block home-shimmer-nav-pill" />
          </div>
        </div>

        <div className="home-shimmer-hero">
          <div className="home-shimmer-copy">
            <span className="shimmer-block home-shimmer-eyebrow" />
            <span className="shimmer-block home-shimmer-title" />
            <span className="shimmer-block home-shimmer-title home-shimmer-title-short" />
            <span className="shimmer-block home-shimmer-description" />
            <span className="shimmer-block home-shimmer-description home-shimmer-description-short" />
            <div className="home-shimmer-buttons">
              <span className="shimmer-block" /><span className="shimmer-block" />
            </div>
            <div className="home-shimmer-highlights">
              <span className="shimmer-block" /><span className="shimmer-block" /><span className="shimmer-block" />
            </div>
          </div>
          <div className="home-shimmer-profile">
            <div className="home-shimmer-profile-top">
              <span className="shimmer-block home-shimmer-photo" />
              <div className="home-shimmer-profile-text">
                <span className="shimmer-block" /><span className="shimmer-block" /><span className="shimmer-block" />
              </div>
            </div>
            <div className="home-shimmer-project">
              <span className="shimmer-block" /><span className="shimmer-block" /><span className="shimmer-block" />
            </div>
          </div>
        </div>

        <div className="home-shimmer-below">
          <span className="shimmer-block" /><span className="shimmer-block" /><span className="shimmer-block" />
        </div>
      </div>
    </div>
  )
}

export default HomeShimmer
