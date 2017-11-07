import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavNavLink extends Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/about-us">About Us</NavLink>
        <NavLink activeClassName="acitve" to="/menu">Menu</NavLink>
        <NavLink replace activeClassName="active" to="/contact-us">Contact Us</NavLink>
      </nav>
    );
  }
}

export default NavNavLink;