import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepPurple } from 'material-ui/colors'
import Home from './Home'
import AboutUs from './AboutUs'

const theme = createMuiTheme({
  mainColorPalette: deepPurple
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
      </div>
    </Router>
  </MuiThemeProvider>
)

export default App
