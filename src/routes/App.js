import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'

const App = () => (
  <Router>
    <div>
      <h1>Hello ChitChat Material Design!</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
    </div>
  </Router>
)

export default App
