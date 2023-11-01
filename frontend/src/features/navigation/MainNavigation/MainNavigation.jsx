// React & Libraries
import { Link, Outlet } from "react-router-dom";

// Styles
import "./MainNavigation.css";

// Features Components
import { MainHeader, NavLinks, SideDrawer } from "../../index";

function MainNavigation(props) {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
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
