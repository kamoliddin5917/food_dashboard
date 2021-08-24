import "./DashboardPerson.scss";

const DashboardPerson = ({ id, img, name, order, pay, status }) => {
  return (
    <li className="person">
      <div className="person__about">
        <img className="person__img" src={img} alt={name} />
        <p className="person__name">{name}</p>
      </div>
      <p className="person__meals">{order}</p>
      <p className="person__pay">{pay}</p>
      <button className="person__status">
        {status ? "preparing" : "completed"}
      </button>
    </li>
  );
};

export default DashboardPerson;
