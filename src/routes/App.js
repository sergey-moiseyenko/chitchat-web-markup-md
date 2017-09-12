import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepPurple } from 'material-ui/colors'
import AuthRoute from 'routes/auth'
import MainRoute from 'routes/main'

const theme = createMuiTheme({
  mainColorPalette: deepPurple
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route path="/auth" component={AuthRoute} />
        <Route path="/" component={MainRoute} />
      </div>
    </Router>
  </MuiThemeProvider>
)

export default App
