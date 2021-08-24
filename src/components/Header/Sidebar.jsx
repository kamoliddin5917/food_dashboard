import "./Sidebar.scss";
import { NavLink, Link } from "react-router-dom";

// SVG components
import {
  LogoSvg,
  HomeSvg,
  StarSvg,
  Dashboard,
  PostCardSvg,
  CallSvg,
  SettingsSvg,
  BackSvg,
} from "../../img/svg/svg";

const Sidebar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="header__logo" to="/">
          <LogoSvg />
        </Link>

        <ul className="nav__ul">
          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/"
              exact
            >
              <span className="nav__span">
                <HomeSvg />
              </span>
            </NavLink>
          </li>

          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/1"
            >
              <span className="nav__span">
                <StarSvg />
              </span>
            </NavLink>
          </li>

          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/dashboard"
            >
              <span className="nav__span">
                <Dashboard />
              </span>
            </NavLink>
          </li>

          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/2"
            >
              <span className="nav__span">
                <PostCardSvg />
              </span>
            </NavLink>
          </li>

          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/3"
            >
              <span className="nav__span">
                <CallSvg />
              </span>
            </NavLink>
          </li>

          <li className="nav__list">
            <NavLink
              className="nav__link"
              activeClassName="nav-link__active"
              to="/settings"
            >
              <span className="nav__span">
                <SettingsSvg />
              </span>
            </NavLink>
          </li>
        </ul>

        <NavLink
          className="nav__link nav__link-back"
          activeClassName="nav-link__active"
          to="/4"
        >
          <span className="nav__span">
            <BackSvg />
          </span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Sidebar;
