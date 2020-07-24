import React from  'react';
import { HashLink as Link } from "react-router-hash-link";
import './navbar.css'


const Navbar = () => {
return (
  <div>
    <div className="nav" id="active">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div className="menu">
            <Link to="/#autismo">Autismo</Link>
            <Link to="/#familia">Familia</Link>
            <Link to="/#sociedade">Sociedade</Link>
            <Link to="/#depoimentos"><span>Depoimentos</span></Link>
        </div>
    </div>
    <nav className="menu-navigation-icons ">
      <Link to="/#autismo" className="menu-blue ">
        <i className="fas fa-puzzle-piece"></i>
        <span>AUTISMO</span>
      </Link>
      <Link to="/#familia" className="menu-yellow">
        <i className="fa fa-heart"></i>
        <span>FAMILIA</span>
      </Link>
      <Link to="/#sociedade" className="menu-red">
        <i className="fas fa-praying-hands"></i>
        <span>SOCIEDADE</span>
      </Link>
      <Link to="/#depoimentos" className="menu-bluetwo">
        <i className="fas fa-comment"></i>
        <span>DEPOIMENTOS</span>
      </Link>
    </nav>
  </div>
);
}


export default Navbar;