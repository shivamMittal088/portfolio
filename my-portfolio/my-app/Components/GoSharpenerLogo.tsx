import "./GoSharpenerLogo.css"

type GoSharpenerLogoProps = {
  className?: string
  alt?: string
}

const GoSharpenerLogo = ({ className = "", alt = "goSharpener logo" }: GoSharpenerLogoProps) => (
  <span className={`go-sharpener-logo ${className}`}>
    <img src="/gosharpener-logo.png" alt={alt} width="200" height="200" loading="lazy" />
  </span>
)

export default GoSharpenerLogo
