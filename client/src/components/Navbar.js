import React from "react";
import './Navbar.scss';

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="nav-button">Brew</div>
      <div className="nav-button">Coffees</div>
      <div className="nav-button">Roasters</div>
    </section>
  )
}

export default Navbar;