import Nav from "./Nav";
import { NavLink } from "react-router-dom";

function Header({ active }) {
  return (
    <header className="header-container auto-adjust-paddings">
      <h2 className="website-name">
        <NavLink to="/" className="website-link-a">
          Mahesh Muttinti
        </NavLink>
      </h2>
      <Nav active={active} />
    </header>
  );
}
export default Header;
