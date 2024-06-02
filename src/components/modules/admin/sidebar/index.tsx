import './index.scss'
import {
  Logo,
  Sidebar1,
  Sidebar2,
  Sidebar3,
  Sidebar4,
} from '../../../../assets'
export default function Sidebar() {
  return (
    <div className="admin-panel">
      <div>
        <img src={Logo} alt="logo" className="logo" />
        <div className="navlinks">
          <div className="links-container">
            <div className="first-navlinks">
              <ul>
                <li>
                  <img
                    src={Sidebar1}
                    alt="Dashboard"
                    className="sidebar-icon"
                  />{' '}
                  Dashboard
                </li>
                <li>
                  <img
                    src={Sidebar2}
                    alt="Business Services"
                    className="sidebar-icon"
                  />{' '}
                  Business Services
                </li>
              </ul>
            </div>
            <div className="second-navlinks">
              <div className="heading-text">Template Management</div>
              <ul>
                <li>
                  <img
                    src={Sidebar3}
                    alt="All Templates"
                    className="sidebar-icon"
                  />{' '}
                  All Templates
                </li>
                <li>
                  <img
                    src={Sidebar4}
                    alt="Downloads"
                    className="sidebar-icon"
                  />{' '}
                  Downloads
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-profile">
          <div className="name">AC </div>
          <div className="details">
            Alize Cornet <span className="email">email@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
