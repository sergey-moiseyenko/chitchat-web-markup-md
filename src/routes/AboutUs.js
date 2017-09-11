import React from 'react'
import { Grid } from 'material-ui'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUsRoute = () => (
  <Grid container direction="column">
    <Header />
    <Grid item xs={12}>
      <AboutUs />
    </Grid>
    <Footer />
  </Grid>
)

export default AboutUsRoute
