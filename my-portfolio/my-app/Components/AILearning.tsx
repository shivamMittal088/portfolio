import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, BrainCircuit, Braces, Workflow } from "lucide-react"
import "./AILearning.css"

const learningPath = [
  {
    number: "01",
    label: "Understand",
    title: "Inside the LLM",
    description:
      "Studying transformers, tokenization, embeddings, context, and why model responses can go wrong.",
    topics: ["Tokens", "Embeddings", "Transformers"],
    Icon: BrainCircuit,
  },
  {
    number: "02",
    label: "Practice",
    title: "AI-native workflow",
    description:
      "Learning to use AI across ideation, architecture, design, code review, testing, and deployment.",
    topics: ["Plan", "Design", "Ship"],
    Icon: Workflow,
  },
  {
    number: "03",
    label: "Explore",
    title: "AI in products",
    description:
      "Exploring LLM APIs, token usage, API protection, and adding AI capabilities to existing software.",
    topics: ["LLM APIs", "Tokens", "API safety"],
    Icon: Braces,
  },
]

const AILearning = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.15 })

    observer.observe(canvas)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ai-learning section-shell" aria-labelledby="ai-learning-title">
      <div className="ai-learning-heading">
        <div>
          <p className="section-label">Learning in motion</p>
          <h2 id="ai-learning-title">Currently exploring AI</h2>
          <p>
            I&apos;m learning how LLMs work, how AI supports a product from planning to deployment,
            and how model capabilities fit into real software.
          </p>
        </div>
        <span className="ai-learning-status"><span aria-hidden="true" /> Learning now</span>
      </div>

      <div className="ai-learning-canvas" ref={canvasRef} data-visible={isVisible}>
        <div className="ai-learning-canvas-top" aria-hidden="true">
          <span>AI LEARNING PATH</span>
          <span>UNDERSTAND <span className="ai-top-arrow">→</span> BUILD <span className="ai-top-arrow">→</span> INTEGRATE</span>
        </div>

        <div className="ai-learning-track" aria-hidden="true">
          <span className="ai-learning-rail"><span className="ai-learning-packet" /></span>
          <span className="ai-learning-track-node" />
          <span className="ai-learning-track-node" />
          <span className="ai-learning-track-node" />
        </div>

        <ol className="ai-learning-steps">
          {learningPath.map(({ number, label, title, description, topics, Icon }) => (
            <li className="ai-learning-step" key={number}>
              <div className="ai-learning-step-top">
                <span className="ai-learning-step-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="ai-learning-step-number">{number} / 03</span>
              </div>
              <p className="ai-learning-step-label">{label}</p>
              <h3>{title}</h3>
              <p className="ai-learning-step-description">{description}</p>
              <div className="ai-learning-topics" aria-label={`${title} topics`}>
                {topics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </li>
          ))}
        </ol>

        <div className="ai-learning-next">
          <div>
            <span className="ai-learning-next-label">Next on the map</span>
            <strong>RAG <span>→</span> Agents <span>→</span> Chatbot systems</strong>
          </div>
          <p>Topics I plan to explore next.</p>
        </div>
      </div>

      <a
        className="ai-learning-source"
        href="https://namastedev.com/learn/namaste-ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        Following the Namaste AI learning path <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </section>
  )
}

export default AILearning
