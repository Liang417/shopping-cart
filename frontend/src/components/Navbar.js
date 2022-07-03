import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>快點購</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            購物車
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">商店</Link>
        </li>
      </ul>

      <div className="fruit__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar