import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Nav({ active }) {
  const checkBoxRef = useRef();
  function closeMenu() {
    if (checkBoxRef.current.checked) checkBoxRef.current.checked = false;
  }
  return (
    <nav className="nav-container">
      <input type="checkbox" id="nav-collapser" ref={checkBoxRef} />
      <ul className="nav-options-container">
        <span className="close-icon" onClick={closeMenu}>
          &times;
        </span>
        <li className="nav-option hobbies">
          <NavLink
            style={{
              textDecoration: active === "hobbies" ? "underline" : "initial",
              fontWeight: active === "hobbies" ? "bold" : "initial",
            }}
            className="nav-link"
            to="/hobbies"
          >
            Hobbies
          </NavLink>
        </li>
        <li className="nav-option skills">
          <NavLink
            className="nav-link"
            to="/skills"
            style={{
              textDecoration: active === "skills" ? "underline" : "initial",
              fontWeight: active === "skills" ? "bold" : "initial",
            }}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-option interests">
          <NavLink
            className="nav-link"
            to="/interests"
            style={{
              textDecoration: active === "interests" ? "underline" : "initial",
              fontWeight: active === "interests" ? "bold" : "initial",
            }}
          >
            Interests
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
