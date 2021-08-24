import "./Dashboard.scss";

// Components
import { Arrow } from "../../img/svg/svg";
import DashboardPerson from "../../components/DashboardPerson/DashboardPerson";
import personOrder from "../../components/personOrder/personOrder";
import Top from "../../components/DashboardRight/Top";
import Bottom from "../../components/DashboardRight/Bottom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__main-header">
          <h1 className="dashboard__main-h1">dashboard</h1>
          <p className="dashboard__main-data">Tuesday 2 Feb, 2021</p>
        </div>
        <ul className="dashboard__main-calculation">
          <li className="dashboard__main-calculation-list">
            <div className="dashboard__main-calculation-list-top">
              <div className="dashboard__main-calculation-list-icon"></div>
              <p className="dashboard__main-calculation-list-p">+32.40%</p>
              <div className="dashboard__main-calculation-list-arrow">
                <Arrow />
              </div>
            </div>
            <div className="dashboard__main-calculation-list-summ">
              $10,243.00
            </div>
            <div className="dashboard__main-calculation-list-howto">
              Total Revenue
            </div>
          </li>

          <li className="dashboard__main-calculation-list">
            <div className="dashboard__main-calculation-list-top">
              <div className="dashboard__main-calculation-list-icon"></div>
              <p className="dashboard__main-calculation-list-p">-12.40%</p>
              <div className="dashboard__main-calculation-list-arrow">
                <Arrow />
              </div>
            </div>
            <div className="dashboard__main-calculation-list-summ">23,456</div>
            <div className="dashboard__main-calculation-list-howto">
              Total Dish Ordered
            </div>
          </li>

          <li className="dashboard__main-calculation-list">
            <div className="dashboard__main-calculation-list-top">
              <div className="dashboard__main-calculation-list-icon"></div>
              <p className="dashboard__main-calculation-list-p">+2.40%</p>
              <div className="dashboard__main-calculation-list-arrow">
                <Arrow />
              </div>
            </div>
            <div className="dashboard__main-calculation-list-summ">1,234</div>
            <div className="dashboard__main-calculation-list-howto">
              Total Customer
            </div>
          </li>
        </ul>

        <div className="dashboard__main-order">
          <div className="dashboard__main-order-top">
            <h3 className="dashboard__main-order-top-title">order report</h3>
            <div className="dashboard__main-order-top-filter">Filter Order</div>
          </div>

          <ul className="dashboard__main-order-header">
            <li className="dashboard__main-order-header-list">Customer</li>
            <li className="dashboard__main-order-header-list">menu</li>
            <li className="dashboard__main-order-header-list">total payment</li>
            <li className="dashboard__main-order-header-list">status</li>
          </ul>

          {personOrder.length > 0 && (
            <ol className="dashboard__main-persons">
              {personOrder.map((person, i) => (
                <DashboardPerson
                  key={i}
                  id={person.id}
                  img={person.img}
                  name={person.person_name}
                  order={person.order}
                  pay={person.pay}
                  status={person.status}
                />
              ))}
            </ol>
          )}
        </div>
      </div>
      
      <div className="dashboard__right">
        <Top />
        <Bottom />
      </div>
    </div>
  );
};

export default Dashboard;
