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
                  to="dashboard"
                  topic="Dashboard"
                  icon={Sidebar1}
                />

                <SidebarNavLink
                  to="business-services"
                  topic="Business Services"
                  icon={Sidebar2}
                />
              </ul>
            </div>
            <div className="second-navlinks">
              <h2 className="heading-text">Template Management</h2>
              <ul>
                <SidebarNavLink
                  to="all-templates"
                  icon={Sidebar3}
                  topic="All Templates"
                />
                <SidebarNavLink
                  to="downloads"
                  icon={Sidebar4}
                  topic="Downloads"
                />
                {/* <SidebarNavLink
                  to="templatedownloads"
                  icon={Sidebar4}
                  topic="DownloadDetails"
                />
                <SidebarNavLink
                  to="templates-all-details"
                  icon={Sidebar4}
                  topic="TemplateDetails"
                /> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-profile">
        <div className="name">AC </div>
        <div className="details">
          <span className="user-name"> Alize Cornet</span>
          <span className="email">email@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
