import "./MenuBtn.scss";

const MenuBtn = ({ btn, setBtnValue, btnValue }) => {
  const btnValueFn = (e) => {
    setBtnValue(e.currentTarget.textContent);
  };

  return (
    <ul className="home__main-menyu">
      {btn.map((item, i) => (
        <li
          className={`home__main-menyu-list ${
            btnValue === item && "home__main-menyu-list_active"
          }`}
          key={i}
          onClick={btnValueFn}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuBtn;
