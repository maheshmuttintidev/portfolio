import React from "react";
import "./style.css";
import Nav from './Nav';

function Header() {
	return (
		<header className="header-container">
			<h2 className="website-name">
				<a href="#" className="website-link-a">Mahesh Muttinti</a>
			</h2>
			<Nav />
		</header>
		)
}
export default Header;