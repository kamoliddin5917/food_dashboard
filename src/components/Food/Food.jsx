import "./Food.scss";
import FoodMenu from "../FoodMenu/FoodMenu";
import useFoodContext from "../../hooks/useFoodContext";

const Food = ({ id, img, name, price, howMany }) => {
  const [foods, setFoods] = useFoodContext();

  const selectedFood = (e) => {
    const findFood = FoodMenu.find(
      (food) => food.id === Number(e.currentTarget.dataset.id)
    );

    if (foods.length > 0) {
      foods.forEach((food) => {
        if (food.id === findFood.id) {
          food.qty = food.qty + 1;
          setFoods([...foods]);
        }
      });

      if (!foods.includes(findFood)) {
        setFoods([...foods, findFood]);
      }
    } else {
      setFoods([...foods, findFood]);
    }
  };

  return (
    <li className="food" data-id={id} onClick={selectedFood}>
      <img className="food__img" src={img} alt={name} />
      <h3 className="food__name">{name}</h3>
      <p className="food__price">{price}</p>
      <p className="food__how_many">{howMany}</p>
    </li>
  );
};

export default Food;
