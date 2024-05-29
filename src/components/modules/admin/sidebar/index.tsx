// export default function Sidebar() {

//     return (
//         <div className="admin_sidebar">
//             <div className="sidebar-logo">

//             </div>
//             <div className="sidebar-menu">
//                 <ul>
//                     <li>Dashboard</li>
//                     <li>Products</li>
//                     <li>Orders</li>
//                     <li>Customers</li>
//                     <li>Settings</li>
//                 </ul>
//         </div>
//     )
// }

import './index.scss'
import { Logo } from '../../../../assets'
export default function Sidebar() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="navlinks">
        <div className="first-navlinks">
          <ul>
            <li>Dashboard</li>
            <li>Business Services</li>
          </ul>
        </div>

        <div className="second-navlinks">
          <div className="heading-text">Template Management</div>
          <ul>
            <li>All Templates</li>
            <li>Downloads</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
