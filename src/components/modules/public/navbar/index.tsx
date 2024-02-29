import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import "./index.scss";
import { useState } from "react";
// import { useAuthContext } from "../../../context/authContext";

interface NavBarProps {
  hasBorder?: boolean;
}

export default function NavBar({ hasBorder }: NavBarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  // const { user } = useAuthContext();

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
          <li>
            <BaseButton variant="primary" href="/login">
              Sign in
            </BaseButton>
          </li>
          {/* {user ? (
            ""
          ) : (
            <li>
              <BaseButton variant="primary" href="/login">
                Sign in
              </BaseButton>
            </li>
          )} */}

          {/* <div className="user">
            {user.firstName[0]}
            {user.lastName[0]}
          </div> */}
        </ul>
      </div>
    </div>
  );
}
