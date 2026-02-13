import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-3 sm:px-4 lg:px-5">
        <NavBar />

        {/* Main content area */}
        <main className="flex-1 space-y-6 pb-10 pt-6 sm:space-y-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
