import React from 'react';
import './style.css';

function Nav() {
	return (
		<nav className="nav-container">
			<input type="checkbox" id="nav-collapser" />
			<ul className="nav-options-container">
				<li className="nav-option home">
					<a href="#">Home</a>
				</li>
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