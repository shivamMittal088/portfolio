import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Main content area */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
