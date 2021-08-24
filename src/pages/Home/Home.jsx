import "./Home.scss";
// import { NavLink } from "react-router-dom";
import { useState } from "react";

// Components
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import Food from "../../components/Food/Food";
import MenuBtn from "../../components/MenuBtn/MenuBtn";
import HomeRight from "../../components/HomeRight/HomeRight";
import HomeModal from "../../components/HomeModal/HomeModal";

const Home = () => {
  const menuBtn = [...new Set(FoodMenu.map((btn) => btn.type))];
  const [btn] = useState(menuBtn);
  const [btnValue, setBtnValue] = useState("grill");

  // useEffect(() => {
  //   setBtn(menuBtn);
  // }, []);

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main-top">
          <div className="home__main-top-text">
            <h1 className="home__main-h1">Jaegar Resto</h1>
            <p className="home__main-data">Tuesday, 2 Feb 2021</p>
          </div>
          <form className="home__main-form">
            <input
              className="home__main-input"
              type="text"
              name="search"
              placeholder="Search for food, coffe, etc.."
              autoComplete="off"
            />
          </form>
        </div>

        {btn.length > 0 && (
          <MenuBtn btn={btn} setBtnValue={setBtnValue} btnValue={btnValue} />
        )}

        <div className="home__main-dishes">
          <h2 className="home__main-dishes-text">Choose Dishes</h2>

          <select className="home__main-dishes-select">
            <option value="dine">Dine In</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
          </select>
        </div>

        {FoodMenu.length > 0 && (
          <ul className="foods">
            {FoodMenu.filter((item) => item.type === btnValue).map((food) => (
              <Food
                key={food.id}
                id={food.id}
                img={food.img}
                name={food.name}
                price={food.price}
                howMany={food.how_many}
              />
            ))}
          </ul>
        )}
      </div>
      <HomeRight />
      <HomeModal />
    </div>
  );
};

export default Home;
