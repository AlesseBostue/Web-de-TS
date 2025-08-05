import { Outlet } from "react-router-dom"
import Header from "@/components/layout/Header"
import Footer from '@/components/layout/Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}


export default Layout