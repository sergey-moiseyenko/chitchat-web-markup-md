import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'routes/main/Home'
import AboutUsRoute from 'routes/main/AboutUs'

const MainRoute = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={AboutUsRoute} />
  </div>
)

export default MainRoute
