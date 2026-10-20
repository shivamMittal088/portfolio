import { useEffect, useRef, type ReactNode } from "react"

const RevealOnScroll = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !window.IntersectionObserver || !element.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      if (element.dataset.revealed === "true") return

      element.dataset.revealed = "true"
      element.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 550, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      )
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="scroll-reveal">{children}</div>
}

export default RevealOnScroll
