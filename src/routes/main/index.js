import React from 'react'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import Home from 'routes/main/Home'
import AboutUsRoute from 'routes/main/AboutUs'
import Header from 'components/Header'
import Footer from 'components/Footer'

const MainRoute = () => (
  <Grid container>
    {/* Header */}
    <Grid item xs={12}>
      <Header />
    </Grid>

    {/* Routes */}
    <Grid item xs={12}>
      <Route exact path="/" component={Home} />
    </Grid>
    <Grid item xs={12}>
      <Route exact path="/about" component={AboutUsRoute} />
    </Grid>

    {/* Footer */}
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
)

export default MainRoute
