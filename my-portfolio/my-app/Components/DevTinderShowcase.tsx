import { ArrowRight, MessageCircle, Smartphone, WifiOff } from "lucide-react"
import type { DevTinderSlideId } from "./devTinderSlides"
import "./DevTinderShowcase.css"

const ProfileSlide = () => (
  <div className="wm-dev-flow">
    <div className="wm-glass-card wm-dev-setup">
      <p className="wm-card-label">Your starting point</p>
      <div className="wm-dev-setup-row"><span>01</span><strong>Sign in</strong><small>Developer account</small></div>
      <div className="wm-dev-setup-row"><span>02</span><strong>Add a bio</strong><small>What you like to build</small></div>
      <div className="wm-dev-setup-row"><span>03</span><strong>Choose skills</strong><small>Show your stack</small></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-dev-profile-card">
      <div className="wm-dev-profile-avatar">A</div>
      <strong>Alex Morgan</strong>
      <p>Building useful web experiences.</p>
      <div><span>React</span><span>Node.js</span><span>APIs</span></div>
      <small>Profile ready to discover</small>
    </div>
  </div>
)

const DiscoverSlide = () => (
  <div className="wm-dev-discover">
    <div className="wm-dev-stack-back" aria-hidden="true" />
    <div className="wm-dev-discover-card">
      <div className="wm-dev-discover-top"><span>DEVELOPER FEED</span><span><i /> Online</span></div>
      <div className="wm-dev-profile-avatar">S</div>
      <strong>Sam Rivera</strong>
      <p>Full-stack developer · APIs and data tools</p>
      <div className="wm-dev-skill-list"><span>Node.js</span><span>MongoDB</span><span>React</span></div>
      <div className="wm-dev-mutual">2 mutual connections</div>
      <div className="wm-dev-feed-actions"><span>Ignore</span><span>Send request</span></div>
    </div>
    <div className="wm-dev-discover-caption"><strong>Browse with context</strong><span>Skills · Activity · Mutuals</span></div>
  </div>
)

const RequestsSlide = () => (
  <div className="wm-dev-flow">
    <div className="wm-glass-card wm-dev-request-card">
      <p className="wm-card-label">Incoming request</p>
      <div className="wm-dev-request-person"><div className="wm-dev-mini-avatar">S</div><div><strong>Sam Rivera</strong><span>Interested in connecting</span></div></div>
      <div className="wm-dev-request-actions"><span>Reject</span><strong>Accept</strong></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-glass-card wm-dev-request-card wm-dev-request-approved">
      <p className="wm-card-label">Request reviewed</p>
      <div className="wm-dev-request-person"><div className="wm-dev-mini-avatar">S</div><div><strong>Sam Rivera</strong><span>Connection accepted</span></div></div>
      <div className="wm-dev-approved-badge">Added to connections</div>
    </div>
  </div>
)

const ConnectionsSlide = () => (
  <div className="wm-connection-scene wm-dev-connections">
    <div className="wm-match-grid">
      <div className="wm-person wm-person-left"><div className="wm-avatar">A</div><strong>Alex</strong><span>React · APIs</span></div>
      <div className="wm-connection-line" aria-hidden="true"><svg viewBox="0 0 140 60" preserveAspectRatio="none"><path d="M4 30 C48 2 92 58 136 30" /></svg><span>Connected</span></div>
      <div className="wm-person wm-person-right"><div className="wm-avatar">S</div><strong>Sam</strong><span>Node.js · Data</span></div>
    </div>
    <div className="wm-dev-network-note"><span>Alex</span><i aria-hidden="true" /><span>2 mutual developers</span><i aria-hidden="true" /><span>Sam</span></div>
  </div>
)

const ChatSlide = () => (
  <div className="wm-dev-chat">
    <div className="wm-dev-chat-header"><div className="wm-dev-mini-avatar">S</div><div><strong>Sam Rivera</strong><span>Connected developer</span></div><MessageCircle size={18} aria-hidden="true" /></div>
    <div className="wm-dev-chat-messages" aria-label="Illustrative live conversation">
      <p>Hey, want to build something together?</p>
      <p>Absolutely. Let’s talk!</p>
      <div className="wm-dev-live-signal"><i aria-hidden="true" /> Live message delivered</div>
    </div>
    <div className="wm-dev-chat-input">Type a message… <span>Send</span></div>
  </div>
)

const InstallSlide = () => (
  <div className="wm-dev-flow wm-dev-install">
    <div className="wm-dev-phone">
      <div className="wm-dev-phone-top"><strong>DevTinder</strong><Smartphone size={16} aria-hidden="true" /></div>
      <div className="wm-dev-phone-avatar">D</div>
      <strong>Connect from anywhere</strong>
      <p>Developer feed · Connections · Chat</p>
      <div className="wm-dev-install-pill">Install app</div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-glass-card wm-dev-offline-card">
      <p className="wm-card-label">Behind the experience</p>
      <div><span>01</span><strong>Browser install prompt</strong></div>
      <div><span>02</span><strong>Cached app shell</strong></div>
      <div><span>03</span><strong>Offline screen</strong></div>
      <p><WifiOff size={15} aria-hidden="true" /> Starting page cached for offline access.</p>
    </div>
  </div>
)

const DevTinderShowcase = ({ slideId, replayKey }: { slideId: DevTinderSlideId; replayKey: number }) => (
  <div key={`${slideId}-${replayKey}`} className="wm-dev-scene">
    {slideId === "profile" && <ProfileSlide />}
    {slideId === "discover" && <DiscoverSlide />}
    {slideId === "requests" && <RequestsSlide />}
    {slideId === "connections" && <ConnectionsSlide />}
    {slideId === "chat" && <ChatSlide />}
    {slideId === "install" && <InstallSlide />}
  </div>
)

export default DevTinderShowcase
