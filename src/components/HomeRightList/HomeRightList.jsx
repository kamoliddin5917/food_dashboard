import "./HomeRightList.scss";

import delete_icon from "../../img/delete.png";
import useFoodContext from "../../hooks/useFoodContext";

const HomeRightList = ({ food }) => {
  const [foods, setFoods] = useFoodContext();

  const deleteFood = (e) => {
    if (foods.length > 0) {
      let findFood = foods.find(
        (food) => food.id === Number(e.currentTarget.dataset.id)
      );
      if (findFood.qty > 1) {
        findFood.qty = findFood.qty - 1;
        setFoods([...foods]);
      } else {
        setFoods(
          foods.filter((food) => food.id !== Number(e.currentTarget.dataset.id))
        );
      }
    }
  };

  return (
    <li className="homerightlist">
      <div className="homerightlist__top">
        <img className="homerightlist__img" src={food.img} alt={food.name} />
        <div className="homerightlist__text">
          <div className="homerightlist__name">{food.name}</div>
          <div className="homerightlist__price">{food.price}</div>
        </div>
        <div className="homerightlist__summa">{food.qty}</div>
        <div className="homerightlist__price-all">
          {`$ ` + (+food.price.slice(1) * food.qty).toFixed(2)}
        </div>
      </div>
      <div className="homerightlist__bottom">
        <input
          className="homerightlist__input"
          type="text"
          placeholder="Order Note..."
        />
        <button
          className="homerightlist__btn"
          data-id={food.id}
          onClick={deleteFood}
        >
          <img
            className="homerightlist__btn-img"
            src={delete_icon}
            alt="delete icon"
          />
        </button>
      </div>
    </li>
  );
};

export default HomeRightList;
