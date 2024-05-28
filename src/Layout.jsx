import Home from "./Components/Home/Home"
import Navbar from "./Components/Navabr/Navbar"
import { Outlet } from "react-router-dom"

function Layout() {

  return (
      <>
        <Navbar />
        <Outlet />
      </>
  )
}

export default Layout
