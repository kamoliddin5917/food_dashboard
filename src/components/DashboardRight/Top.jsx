import "./Top.scss";

// Components
import FoodMenu from "../FoodMenu/FoodMenu";

const Top = () => {
  return (
    <div className="top">
      <div className="top__header">
        <h2 className="top__title">Most Ordered</h2>
        <select className="top__select">
          <option value="today">today</option>
          <option value="before">before</option>
          <option value="thedaybefore">the day before</option>
        </select>
      </div>

      <ul className="top__boxes">
        {FoodMenu.length > 0 &&
          FoodMenu.map((food, i) => (
            <li className="top__box" key={i}>
              <img className="top__box-img" src={food.img} alt={food.name} />
              <div className="top__box-text">
                <p className="top__box-name">{food.name}</p>
                <p className="top__box-summ">{food.how_many}</p>
              </div>
            </li>
          ))}
      </ul>

      <button className="top__btn">view all</button>
    </div>
  );
};

export default Top;
