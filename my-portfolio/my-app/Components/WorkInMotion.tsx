import { useEffect, useRef, useState } from "react"
import { RotateCcw } from "lucide-react"
import ExpenseShowcase from "./ExpenseShowcase"
import { expenseSlides } from "./expenseSlides"
import GoSharpenerShowcase from "./GoSharpenerShowcase"
import { goSharpenerSlides, type MatchRule } from "./goSharpenerSlides"
import DevTinderShowcase from "./DevTinderShowcase"
import { devTinderSlides } from "./devTinderSlides"
import GoSharpenerLogo from "./GoSharpenerLogo"
import "./WorkInMotion.css"

type Scene = "expense" | "mapping" | "connection"

const scenes: { id: Scene; number: string; label: string; description: string }[] = [
  {
    id: "expense",
    number: "01",
    label: "Expense Tracker",
    description: "Transactions become a clearer picture of monthly spending.",
  },
  {
    id: "mapping",
    number: "02",
    label: "goSharpener",
    description: "Student records are checked against a chosen matching rule.",
  },
  {
    id: "connection",
    number: "03",
    label: "DevTinder",
    description: "A connection opens the way to a real-time conversation.",
  },
]

const WorkInMotion = () => {
  const [activeScene, setActiveScene] = useState<Scene>("expense")
  const [expenseSlide, setExpenseSlide] = useState(0)
  const [expenseAutoPlay, setExpenseAutoPlay] = useState(true)
  const [goSlide, setGoSlide] = useState(0)
  const [goAutoPlay, setGoAutoPlay] = useState(true)
  const [devSlide, setDevSlide] = useState(0)
  const [devAutoPlay, setDevAutoPlay] = useState(true)
  const [matchRule, setMatchRule] = useState<MatchRule>("admission")
  const [replayKey, setReplayKey] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const stageRef = useRef<HTMLDivElement>(null)
  const selected = scenes.find((scene) => scene.id === activeScene)!
  const selectedExpenseSlide = expenseSlides[expenseSlide]
  const selectedGoSlide = goSharpenerSlides[goSlide]
  const selectedDevSlide = devTinderSlides[devSlide]
  const featureSlides = activeScene === "expense" ? expenseSlides : activeScene === "mapping" ? goSharpenerSlides : devTinderSlides
  const featureSlideIndex = activeScene === "expense" ? expenseSlide : activeScene === "mapping" ? goSlide : devSlide
  const selectedFeatureSlide = activeScene === "expense" ? selectedExpenseSlide : activeScene === "mapping" ? selectedGoSlide : selectedDevSlide
  const isAutoPlaying = activeScene === "expense" ? expenseAutoPlay : activeScene === "mapping" ? goAutoPlay : devAutoPlay
  const isLastSlide = featureSlideIndex === featureSlides.length - 1

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => {
      if (media.matches) {
        setExpenseAutoPlay(false)
        setGoAutoPlay(false)
        setDevAutoPlay(false)
      }
    }
    handleChange()
    media.addEventListener("change", handleChange)
    return () => media.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.15 })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeScene !== "expense" || !isVisible || !expenseAutoPlay) return
    if (expenseSlide >= expenseSlides.length - 1) return

    const timer = window.setTimeout(() => setExpenseSlide((slide) => slide + 1), 6500)
    return () => window.clearTimeout(timer)
  }, [activeScene, expenseSlide, expenseAutoPlay, isVisible])

  useEffect(() => {
    if (activeScene !== "mapping" || !isVisible || !goAutoPlay) return
    if (goSlide >= goSharpenerSlides.length - 1) return

    const timer = window.setTimeout(() => setGoSlide((slide) => slide + 1), 6500)
    return () => window.clearTimeout(timer)
  }, [activeScene, goSlide, goAutoPlay, isVisible])

  useEffect(() => {
    if (activeScene !== "connection" || !isVisible || !devAutoPlay) return
    if (devSlide >= devTinderSlides.length - 1) return

    const timer = window.setTimeout(() => setDevSlide((slide) => slide + 1), 6500)
    return () => window.clearTimeout(timer)
  }, [activeScene, devSlide, devAutoPlay, isVisible])

  const selectScene = (scene: Scene) => {
    setActiveScene(scene)
    const allowAutoPlay = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (scene === "expense") {
      setExpenseSlide(0)
      setExpenseAutoPlay(allowAutoPlay)
    }
    if (scene === "mapping") {
      setGoSlide(0)
      setGoAutoPlay(allowAutoPlay)
      setMatchRule("admission")
    }
    if (scene === "connection") {
      setDevSlide(0)
      setDevAutoPlay(allowAutoPlay)
    }
    setReplayKey((value) => value + 1)
  }

  const selectExpenseSlide = (slide: number) => {
    setExpenseAutoPlay(false)
    setExpenseSlide(slide)
    setReplayKey((value) => value + 1)
  }

  const selectGoSlide = (slide: number) => {
    setGoAutoPlay(false)
    setGoSlide(slide)
    setReplayKey((value) => value + 1)
  }

  const selectDevSlide = (slide: number) => {
    setDevAutoPlay(false)
    setDevSlide(slide)
    setReplayKey((value) => value + 1)
  }

  const selectFeatureSlide = (slide: number) => {
    if (activeScene === "expense") selectExpenseSlide(slide)
    else if (activeScene === "mapping") selectGoSlide(slide)
    else selectDevSlide(slide)
  }

  const selectRule = (rule: MatchRule) => {
    setGoAutoPlay(false)
    setMatchRule(rule)
    setReplayKey((value) => value + 1)
  }

  const toggleAutoPlay = () => {
    const shouldPlay = !isAutoPlaying || isLastSlide
    if (shouldPlay && isLastSlide) {
      if (activeScene === "expense") setExpenseSlide(0)
      else if (activeScene === "mapping") setGoSlide(0)
      else setDevSlide(0)
      setReplayKey((value) => value + 1)
    }

    if (activeScene === "expense") setExpenseAutoPlay(shouldPlay)
    else if (activeScene === "mapping") setGoAutoPlay(shouldPlay)
    else setDevAutoPlay(shouldPlay)
  }

  const autoPlayLabel = isAutoPlaying && isLastSlide ? "Restart slides" : isAutoPlaying ? "Pause slides" : "Play slides"

  return (
    <section className="section-shell wm-panel" aria-labelledby="work-in-motion-title">
      <div className="wm-heading">
        <div>
          <p className="section-label">Interactive walkthrough</p>
          <h2 id="work-in-motion-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How my work works
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            A quick look at the workflows behind three projects. Pick one to explore.
          </p>
        </div>
        <span className="wm-heading-tag">Built to be explored</span>
      </div>

      <div className="wm-scene-picker" role="group" aria-label="Choose a workflow">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            type="button"
            className="wm-scene-button"
            aria-pressed={activeScene === scene.id}
            onClick={() => selectScene(scene.id)}
          >
            <span>{scene.number}</span>
            {scene.id === "mapping" ? (
              <>
                <GoSharpenerLogo className="go-logo-picker" alt="" />
                <span className="sr-only">{scene.label}</span>
              </>
            ) : scene.label}
          </button>
        ))}
      </div>

      <div className="wm-stage" ref={stageRef} data-paused={!isVisible}>
        <div className="wm-stage-top">
          <span><i aria-hidden="true" /> WORKFLOW DEMO</span>
          <span>{selected.number} / 03</span>
        </div>
        <div className="wm-stage-canvas">
          {activeScene === "expense" && (
            <ExpenseShowcase slideId={selectedExpenseSlide.id} replayKey={replayKey} />
          )}
          {activeScene === "mapping" && (
            <GoSharpenerShowcase slideId={selectedGoSlide.id} rule={matchRule} replayKey={replayKey} onRuleChange={selectRule} />
          )}
          {activeScene === "connection" && <DevTinderShowcase slideId={selectedDevSlide.id} replayKey={replayKey} />}
        </div>
        <div className="wm-expense-nav" aria-label={`${selected.label} features`}>
            <div className="wm-expense-progress">
              <span>{String(featureSlideIndex + 1).padStart(2, "0")} / {String(featureSlides.length).padStart(2, "0")}</span>
              <strong>{selectedFeatureSlide.title}</strong>
            </div>
            <div className="wm-expense-dots" role="group" aria-label={`Choose a ${selected.label} feature`}>
              {featureSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-pressed={featureSlideIndex === index}
                  onClick={() => selectFeatureSlide(index)}
                />
              ))}
            </div>
            <div className="wm-expense-controls">
              <button type="button" className="wm-autoplay-control" onClick={toggleAutoPlay}>
                {autoPlayLabel}
              </button>
              <button type="button" disabled={featureSlideIndex === 0} onClick={() => selectFeatureSlide(featureSlideIndex - 1)}>
                Previous
              </button>
              <button type="button" disabled={featureSlideIndex === featureSlides.length - 1} onClick={() => selectFeatureSlide(featureSlideIndex + 1)}>
                Next
              </button>
            </div>
        </div>
      </div>

      <div className="wm-footer">
        <p aria-live={(activeScene === "expense" && expenseAutoPlay) || (activeScene === "mapping" && goAutoPlay) || (activeScene === "connection" && devAutoPlay) ? "off" : "polite"}>
          {selectedFeatureSlide.description}
        </p>
        <button type="button" className="wm-replay" onClick={() => {
          setExpenseAutoPlay(false)
          setGoAutoPlay(false)
          setDevAutoPlay(false)
          setReplayKey((value) => value + 1)
        }}>
          <RotateCcw size={16} aria-hidden="true" /> Replay
        </button>
      </div>
    </section>
  )
}

export default WorkInMotion
