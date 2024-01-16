import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import "./index.scss";
import { useState } from "react";

interface NavBarProps {
  variant?: "border";
}

export default function NavBar({ variant }: NavBarProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={`nav-bar--${variant} app-container`}>
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

          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L21 12"
              stroke="#0E2557"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6L21 6"
              stroke="#0E2557"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 18L21 18"
              stroke="#0E2557"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}

          {/* <Icon name="menu" /> */}
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
          <li>
            <BaseButton variant="primary" href="/login">
              Sign in
            </BaseButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
