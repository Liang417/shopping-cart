import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cc.tvbs.com.tw/img/program/upload/2019/08/13/20190813124006-9d4faa6c.jpg"
        alt="name"
      />

      <div className="product__info">
        <p className="info__name">芭樂</p>
        <p className="info__description">
          比拳頭大的芭樂!
        </p>

        <p className="info__price">$10</p>

        <Link to={'/product/${1111}'} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
