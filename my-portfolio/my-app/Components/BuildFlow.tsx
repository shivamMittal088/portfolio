import { useEffect, useRef, useState } from "react"
import { Braces, Lightbulb, Pause, PenTool, Play, Rocket } from "lucide-react"

const stages = [
  { label: "Idea", Icon: Lightbulb },
  { label: "Design", Icon: PenTool },
  { label: "Build", Icon: Braces },
  { label: "Ship", Icon: Rocket },
]

const BuildFlow = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !window.IntersectionObserver) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="build-flow" ref={ref} data-paused={paused || !visible}>
      <div className="build-flow-track" aria-hidden="true"><span /></div>
      <ol aria-label="My product development process">
        {stages.map(({ label, Icon }, index) => (
          <li key={label}>
            <span className="build-flow-node" style={{ animationDelay: `${index * 1.6}s` }}><Icon size={16} strokeWidth={1.6} aria-hidden="true" /></span>
            <span>{label}</span>
          </li>
        ))}
      </ol>
      <button type="button" className="build-flow-toggle" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play process animation" : "Pause process animation"} aria-pressed={paused}>
        {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
      </button>
    </div>
  )
}

export default BuildFlow
