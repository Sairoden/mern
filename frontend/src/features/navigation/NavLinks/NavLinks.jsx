// React & Libraries
import { NavLink } from "react-router-dom";

// Styles
import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">New Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
