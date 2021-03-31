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
				<li className="nav-option signin">
					<a href="#signin">Signin</a>
				</li>
				<li className="nav-option signup">
					<a href="#signup">Signup</a>
				</li>
				<li className="nav-option interests">
					<a href="#interests">Interests</a>
				</li>
			</ul>
		</nav>
		)
}
export default Nav;