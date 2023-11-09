// React & Libraries
import { NavLink } from "react-router-dom";

// Styles
import "./NavLinks.css";

// Contexts
import { useAuthContext } from "../../../contexts/auth_context";

function NavLinks() {
  const { isLoggedIn, logout } = useAuthContext();

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
          </li>
          <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
          </li>
          <li>
            <button onClick={logout}>LOGOUT</button>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
