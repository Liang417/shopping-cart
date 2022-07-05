import "./CartItem.css";
import { Link } from "react-router-dom";
const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://cc.tvbs.com.tw/img/program/upload/2019/08/13/20190813124006-9d4faa6c.jpg"
          alt="product name"
        />
      </div>

      <Link to={"/product/${111}"} className="cartitem__name">
        <p>Product1</p>
      </Link>

      <p className="cartitem__price">$10</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;