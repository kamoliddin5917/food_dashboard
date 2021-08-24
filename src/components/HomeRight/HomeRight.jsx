import "./HomeRight.scss";

// Components
import HomeRightList from "../HomeRightList/HomeRightList";
import useFoodContext from "../../hooks/useFoodContext";

const HomeRight = () => {
  const [foods] = useFoodContext();

  return (
    <div className="homeright">
      <h3 className="homeright__h3">Orders #34562</h3>

      <div className="homeright__buttons">
        <button className="homeright__buttons-btn">Dine In</button>
        <button className="homeright__buttons-btn">To Go</button>
        <button className="homeright__buttons-btn">Delivery</button>
      </div>

      <div className="homeright__inform">
        <div className="homeright__inform-item">item</div>
        <div className="homeright__inform-item">Qty</div>
        <div className="homeright__inform-item">price</div>
      </div>

      {
        <ul className="homeright__box">
          {foods.length > 0 &&
            foods.map((item, i) => <HomeRightList key={i} food={item} />)}
        </ul>
      }

      <div className="homeright__price">
        <div className="homeright__price-text">Discount</div>
        <div className="homeright__price-sum">$0</div>
      </div>

      <div className="homeright__price">
        <div className="homeright__price-text">Sub total</div>
        <div className="homeright__price-sum">$21,03</div>
      </div>

      <button
        className="homeright__btn"
        onClick={() => {
          document
            .querySelector(".homemodal")
            .classList.add("homemodal__active");
        }}
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default HomeRight;
