import { BiMenuAltRight } from "react-icons/bi"; 
import { BiSearch } from "react-icons/bi"; 
import React,{useState} from 'react'
import './Navbar.scss'
import logo from './img/logo.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [toggle,settogle] = useState(false)
    
  return (
   <>
   <header>
    <div className="Navbar conteiner">

    <div className={`nav__items ${toggle ? 'show' : ''}`}>
        <NavLink to={"/"}>Home</NavLink>
        <a href="#">Shop All</a>
       <NavLink to={"KantaktLink"}>
         Kontakt Us
       </NavLink>
    </div>
    
    <div className="nav__logo">
      <NavLink to={"/"}>
       <img src= {logo} alt="logo" />
      </NavLink>
        
    </div>

    <div className="nav_search">
        <a href="#">About Us</a>
        <input type="text"  placeholder='Search Product ... '/>< BiSearch className="searchicon" />
    </div>
    <button id="menu"  onClick={() => settogle(!toggle)}><BiMenuAltRight /></button>


    </div>





   </header>


   
   
   </>
  )
}

export default Navbar