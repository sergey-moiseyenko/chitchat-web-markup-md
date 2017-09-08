import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const NavigationList = () => (
  <ul className="header-navigation-list">
    <NavLink to="/about-us">
      <li>About Us</li>
    </NavLink>
    <NavLink to="/why-kiss-kiss-meow">
      <li>Why Kiss-Kiss-Meow?</li>
    </NavLink>
    <NavLink to="/sign-in">
      <li>Your Profile</li>
    </NavLink>
  </ul>
)

export default NavigationList
