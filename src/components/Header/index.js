import React from 'react'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

const Header = () => (
  <AppBar position="static" color="default">
    <Tabs
      value={0}
      onChange={() => {}}
      indicatorColor="primary"
      textColor="primary"
      fullWidth
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
      <Tab label="Item Five" />
      <Tab label="Item Six" />
    </Tabs>
  </AppBar>
)

export default Header
