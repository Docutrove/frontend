import { NavLink } from 'react-router-dom'

const SidebarNavLink = ({
  to,
  icon,
  topic,
}: {
  to: string
  icon: string
  topic: string
}) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
      <img src={icon} alt={topic} className="sidebar-icon" /> {topic}
    </NavLink>
  )
}

export default SidebarNavLink
