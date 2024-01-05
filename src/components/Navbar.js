//import React from "react";
//import { Link } from "react-router-dom";
////import * as Icons from ".react-icons/fa";
//import { Route, Routes } from "react-router-dom";
//import Products from "../pages/Products";
//import Button from "./Button";
//import { navItems } from "./NavItems";
//import "./Navbar.css";
//function Navbar()
//{
//    return(
//    <>
//    <nav className="Navbar">
//        <Link to="/" className="navbar-logo">
//            Nature
//        </Link>
//        <ul className="nav-item">
//            {navItems.map(item=>{
//                return(
//                <li key={item.id} className={item.class}>
//                    <Link to={item.path}>{item.title}</Link>
//
//
//                    </li>
//
//                );
//            })}
//        </ul>
//        <Button/>
//
//    </nav>
//    </>
//    );
//}
//export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		
		
			<h2> KK Grocery</h2>
			<nav ref={navRef}>
				<h4><Link to='/'>Home</Link></h4>
				<h4><Link to='/features'>Features</Link></h4>
				<h4><Link to='/category'>Category</Link></h4>
				<h4><Link to='/products'>Products</Link></h4>
				<h4><Link to='/contact'>Contact</Link></h4>
				<h4><Link to='/Login'>Login</Link></h4>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<div className="cart">
				<span>
					<i class="fas fa-cart-plus"></i>
				</span>
				<span>1</span>
				</div>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
