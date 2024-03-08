import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import "./index.scss";
import { useState } from "react";
import { useAuthContext } from "../../../context/authContext";

interface NavBarProps {
  hasBorder?: boolean;
}

export default function NavBar({ hasBorder }: NavBarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, token, logout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const Logout = () => {
    logout();
    location.replace("/login");
  };

  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={`nav-bar ${hasBorder ? "border" : ""} app-container`}>
      <div className="nav-bar__content app-container__section">
        <Link to="/">
          <Icon name="logo-light" className="nav-logo" />
        </Link>
        <button
          className={`nav-bar__content__menu ${openMenu ? "open" : ""}`}
          onClick={handleToggle}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul className={`nav-bar__content__links ${openMenu ? "active" : ""}`}>
          <li>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
          </li>

          {token != "" ? (
            <div className="user-container">
              <div className="user" onClick={toggleDropdown}>
                <Icon name="dark_user" className="user__icon" />
                <p className="text--xs">
                  {user.firstName} {user.lastName}
                </p>
                <Icon name="dropdown" className="user__icon" />
              </div>
              <div className={`nav-dropdown ${dropdownOpen ? "show" : "hide"}`}>
                <Link
                  to="/settings"
                  className="nav-dropdown__item dropdown-account"
                >
                  <Icon name="purple_user" />
                  <p className="text--xs">Account</p>
                </Link>
                <button
                  className="nav-dropdown__item dropdown-logout"
                  onClick={Logout}
                >
                  <Icon name="logout" />
                  <p className="text--xs">Log Out</p>
                </button>
              </div>
            </div>
          ) : (
            <li>
              <BaseButton variant="primary" href="/login">
                Sign in
              </BaseButton>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
