import {useState, useRef} from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
	const checkBoxRef = useRef()
	function closeMenu() {
		if(checkBoxRef.current.checked) checkBoxRef.current.checked = false
	}
	return (
		<nav className="nav-container">
			<input type="checkbox" id="nav-collapser" ref={checkBoxRef} />
			<ul className="nav-options-container">
				<span className="close-icon" onClick={closeMenu}>&times;</span>
				<li className="nav-option hobbies">
					<NavLink className="nav-link" to="/hobbies">Hobbies</NavLink>
				</li>
				<li className="nav-option skills">
					<NavLink className="nav-link" to="/skills">Skills</NavLink>
				</li>
				<li className="nav-option interests">
					<NavLink  className="nav-link" to="/interests">Interests</NavLink>
				</li>
			</ul>
		</nav>
		)
}
export default Nav;