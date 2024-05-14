import React,{useRef} from "react";
import  './navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar=()=>{


const menuRef=useRef();
const openMenu=()=>{
  menuRef.current.style.right="0";
}
const closeMenu=()=>{
  menuRef.current.style.right="-350px";
}


  return(
    <div id="home" className="navbar">
        <div className="logo">Sachin's Portfolio</div>
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
        <ul ref={menuRef} onClick={closeMenu} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close"/>
      
            <li><a href="#home" > Home</a></li>
            <li><a href="#about">About Me </a> </li>
            
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-connect"><a href="#contact">Connect With Me</a> </div>
    </div>
  )
}
export default Navbar