import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://cc.tvbs.com.tw/img/program/upload/2019/08/13/20190813124006-9d4faa6c.jpg"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">product1</p>
          <p>Price:$10</p>
          <p>
            Description:Eu proident deserunt nulla sunt laboris ullamco ex .
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            價格: <span>$10</span>
          </p>
          <p>
            庫存: <span>有貨</span>
          </p>
          <p>
            數量
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">加入購物車</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
