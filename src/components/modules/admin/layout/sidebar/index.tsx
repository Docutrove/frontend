import './index.scss'
import {
  Logo,
  Sidebar1,
  Sidebar2,
  Sidebar3,
  Sidebar4,
} from '../../../../../assets'
import SidebarNavLink from './sidebarlink'

export default function Sidebar() {
  return (
    <div className="admin-panel">
      <div className="admin-panel-links">
        <img src={Logo} alt="logo" className="logo" />
        <div className="navlinks">
          <div className="links-container">
            <div className="first-navlinks">
              <ul>
                <SidebarNavLink
                  to="Dashboard"
                  topic="Dashboard"
                  icon={Sidebar1}
                />

                <SidebarNavLink
                  to="Business-Services"
                  topic="Business Services"
                  icon={Sidebar2}
                />

                <SidebarNavLink
                  to="Business-Details"
                  topic="Business-Details"
                  icon={Sidebar2}
                />
              </ul>
            </div>
            <div className="second-navlinks">
              <h2 className="heading-text">Template Management</h2>
              <ul>
                <SidebarNavLink
                  to="All-Templates"
                  icon={Sidebar3}
                  topic="All Templates"
                />
                <SidebarNavLink
                  to="Downloads"
                  icon={Sidebar4}
                  topic="Downloads"
                />
                <SidebarNavLink
                  to="TemplateDownloads"
                  icon={Sidebar4}
                  topic="DownloadDetails"
                />
              </ul>
            </div>
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
  )
}
