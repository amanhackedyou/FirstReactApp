import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {

	const navStyle = {
		backgroundColor: "purple",
		color: "white",
		padding: "3px 0",
	}

	const ulStyle = {
		display: "flex",
		justfyContent: "center",
		alignItems: "center"
	}

	const liStyle = {
		listStyle: "none",
		margin: "0 13px",
	}

	const linkStyle = {
		color: "white",
		textDecoration: "none"
	}

	return (
		<nav style={navStyle} className="navContainer">
			<ul style={ulStyle}>
				<li style={liStyle}>
					<Link style={linkStyle} to="/">Home</Link>
				</li>

				<li style={liStyle}>	
					<Link style={linkStyle} to="/about">About</Link>
				</li>	

				<li style={liStyle}>
					<Link style={linkStyle} to="/services">Services</Link>
				</li>

				<li style={liStyle}>
					<Link style={linkStyle} to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}
