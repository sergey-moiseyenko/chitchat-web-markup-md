import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepPurple } from 'material-ui/colors'
import SignUpRoute from './SignUp'
import Home from './Home'
import AboutUsRoute from './AboutUs'

const theme = createMuiTheme({
  mainColorPalette: deepPurple
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUsRoute} />
        <Route path="/sign-up" component={SignUpRoute} />
      </div>
    </Router>
  </MuiThemeProvider>
)

export default App
