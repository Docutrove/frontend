import { Link } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import "./index.scss";

export default function NavBar() {
  return (
    <div className="nav-bar app-container">
      <div className="nav-bar__content app-container__section">
        <Link to="/">
          <Icon name="logo-light" />
        </Link>
        <ul className="nav-bar__content__links">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <BaseButton variant="primary" href="">
              Sign in
            </BaseButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
