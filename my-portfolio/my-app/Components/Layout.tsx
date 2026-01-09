import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* This is where pages change */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shivam Mittal
      </footer>
    </div>
  )
}

export default Layout
