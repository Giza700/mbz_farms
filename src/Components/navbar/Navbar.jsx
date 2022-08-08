import React from "react";
import './navbar.css';
//import {RiMenu3Line,RiCloseLin} from 'react-icons/ri';
import logo from '../../Assets/farmer women.png'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img className = "logo" src={logo} alt="logo" />
            <div className="navbar_links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Gallery</a>
                <button className="navbar_links-button">Contact</button>
            </div>
      </div>
     );
}
 
export default Navbar;