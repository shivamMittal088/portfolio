export const devTinderSlides = [
  {
    id: "profile",
    title: "Create a profile",
    description: "Sign in and build a developer profile with a bio, skills, photo, and the details that make introductions easier.",
  },
  {
    id: "discover",
    title: "Discover developers",
    description: "Browse the developer feed, see skills and recent activity, and spot mutual connections before reaching out.",
  },
  {
    id: "requests",
    title: "Connection requests",
    description: "Send an interest request from the feed, then accept or reject requests received from other developers.",
  },
  {
    id: "connections",
    title: "Build a network",
    description: "Accepted requests become connections, with mutual developers helping reveal the wider network.",
  },
  {
    id: "chat",
    title: "Real-time chat",
    description: "Open a one-to-one conversation and exchange messages live through Socket.IO.",
  },
  {
    id: "install",
    title: "Installable app",
    description: "Install DevTinder from the browser; its service worker caches the starting page, and the app includes an offline screen.",
  },
] as const

export type DevTinderSlideId = (typeof devTinderSlides)[number]["id"]
