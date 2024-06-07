import { ReactNode, useEffect, useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { useLocation } from 'react-router'
import './index.scss' // Import the SCSS file

interface LayoutProps {
  className?: string
  children: ReactNode
}

export default function Layout({ className, children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const [showSidebar, setShowSideBar] = useState(false)

  const openSideBarHandler = () => {
    setShowSideBar((prev) => !prev)
  }

  return (
    <div className={`layout ${className}`}>
      <div className="wrapper">
        <nav className={`nav ${!showSidebar ? 'inactive' : 'active'}`}>
          <div className="sidebar">
            <Sidebar />
          </div>
        </nav>
        <div className="content">
          <header>
            <Header
              showSidebar={showSidebar}
              openSideBar={openSideBarHandler}
            />
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
