import './index.scss'
import { SearchIcon } from '../../../../assets'

export default function Header() {
  return (
    <div className="Header">
      <header className="header">
        <h1>Dashboard</h1>
        <div className="header-right">
          <div className="search-component">
            <img src={SearchIcon} alt="search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
          <div className="profile">
            <div className="notification-icon">🔔</div>
            <div className="user-icon">U</div>
          </div>
        </div>
      </header>
    </div>
  )
}
