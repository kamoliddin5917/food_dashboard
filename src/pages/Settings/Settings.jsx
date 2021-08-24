import "./Settings.scss";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

// Components
import ProductsMenegment from "../../components/ProductsMenegment/ProductsMenegment";

const Settings = () => {
  const { url, path } = useRouteMatch();

  return (
    <div className="settings">
      <h1 className="settings__title">Settings</h1>
      <div className="settings__box">
        <div className="settings__navbar">
          <NavLink
            to={`${url}/1`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">Appereance</h4>
              <div className="settings__navbar-text-information">
                Dark and Light mode, Font size
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/2`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">Your Restaurant</h4>
              <div className="settings__navbar-text-information">
                Dark and Light mode, Font size
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/3`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">
                Products Management
              </h4>
              <div className="settings__navbar-text-information">
                Manage your product, pricing, etc
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/4`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">Notifications</h4>
              <div className="settings__navbar-text-information">
                Customize your notifications
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/5`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">Security</h4>
              <div className="settings__navbar-text-information">
                Configure Password, PIN, etc
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/6`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">Security</h4>
              <div className="settings__navbar-text-information">
                Configure Password, PIN, etc
              </div>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/7`}
            className="settings__navbar-link"
            activeClassName="settings__navbar-link_active"
          >
            <span className="svg"></span>
            <div className="settings__navbar-text">
              <h4 className="settings__navbar-text-title">About Us</h4>
              <div className="settings__navbar-text-information">
                Find out more about Posly
              </div>
            </div>
          </NavLink>
        </div>

        <Switch>
          <Route path={`${path}/1`} component={ProductsMenegment} />
          <Route />
        </Switch>
      </div>
    </div>
  );
};

export default Settings;
