import React from 'react'
import NavigationList from '../NavigationList/index'
import Logo from '../Logo/index'
import './index.css'

const Header = () => (
  <div className="header">
    <Logo />
    <NavigationList />
  </div>
)

export default Header
