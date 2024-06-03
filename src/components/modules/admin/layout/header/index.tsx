import './index.scss'
import { SearchIcon } from '../../../../../assets'
import { useLocation } from 'react-router'
import { RiCloseLargeLine } from 'react-icons/ri'
import { RiMenu3Fill } from 'react-icons/ri'
export default function Header({
  showSidebar,
  openSideBar,
}: {
  showSidebar: boolean
  openSideBar: () => void
}) {
  const location = useLocation()
  const title = location.pathname.split('/').pop()

  return (
    <div className="Header">
      <header className="header">
        <h1>{title && title.split('-').join(' ')}</h1>
        <div className="header-right">
          <div className="search-component">
            <img src={SearchIcon} alt="search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
          <div className="profile">
            <div className="notification-icon">🔔</div>
            <div className="user-icon">U</div>

            <div onClick={openSideBar} className="ham-icon">
              {showSidebar ? <RiMenu3Fill /> : <RiCloseLargeLine />}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
