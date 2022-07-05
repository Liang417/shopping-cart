import "./CartScreen.css";

//Component
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>總共: (0) 件物品</p>
          <p>$10</p>
        </div>
        <div>
          <button>去結帳</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
