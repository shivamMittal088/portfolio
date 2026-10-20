import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './design.css'
import './theme.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  const queuedImages = new Set<string>()
  let imageCacheController = navigator.serviceWorker.controller

  const saveImageUrl = async (url: string) => {
    try {
      // Images fetched under an active worker may already be saved.
      if (await caches.match(url)) return
    } catch {
      // Let the worker try even if page-level storage access is unavailable.
    }
    const response = await fetch(url)
    if (!response.ok) throw new Error("Could not save loaded image")
    await response.arrayBuffer()
  }

  const saveLoadedImage = (image: HTMLImageElement) => {
    if (!navigator.serviceWorker.controller || !image.complete || image.naturalWidth === 0) return
    const url = new URL(image.currentSrc || image.src, window.location.href)
    if (url.origin !== window.location.origin || queuedImages.has(url.href)) return
    queuedImages.add(url.href)

    // Replay only images already loaded by this page through the active worker.
    // This fills the first-visit gap without prefetching unseen gallery media.
    void saveImageUrl(url.href).catch(() => queuedImages.delete(url.href))
  }

  const saveImageAfterLoad = (event: Event) => {
    if (event.currentTarget instanceof HTMLImageElement) saveLoadedImage(event.currentTarget)
  }

  const saveLoadedImages = () => {
    const controller = navigator.serviceWorker.controller
    if (!controller || controller === imageCacheController) return
    imageCacheController = controller
    queuedImages.clear()
    Array.from(document.images).forEach((image) => {
      if (image.complete) saveLoadedImage(image)
      // A listener doesn't start a lazy image; save it only after it actually loads.
      else image.addEventListener("load", saveImageAfterLoad, { once: true })
    })
  }

  navigator.serviceWorker.addEventListener("controllerchange", saveLoadedImages)

  const registerWorker = () => {
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      // The site remains usable online if offline support is unavailable.
    })
    void navigator.serviceWorker.ready.then(saveLoadedImages).catch(() => {})
  }

  if (document.readyState === "complete") registerWorker()
  else window.addEventListener("load", registerWorker, { once: true })
}
