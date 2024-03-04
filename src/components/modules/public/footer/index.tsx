import { Link } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer app-container">
      <div className="footer__content app-container__section">
        <Link to="/">
          <Icon name="logo-dark" />
        </Link>

        <ul className="footer__content__links">
          <li className="footer__content__links__link">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="footer__content__links__link">
            <Link to="">Support</Link>
          </li>
          {/* <li className="footer__content__links__link">
            <Link to="">Terms and conditions</Link>
          </li>
          <li className="footer__content__links__link">
            <Link to="">Privacy policy</Link>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
