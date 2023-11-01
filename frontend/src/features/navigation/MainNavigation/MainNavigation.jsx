// React & Libraries
import { Link, Outlet } from "react-router-dom";

// Styles
import "./MainNavigation.css";

// Features Components
import { MainHeader, NavLinks } from "../../index";

function MainNavigation(props) {
  return (
    <>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainNavigation;
