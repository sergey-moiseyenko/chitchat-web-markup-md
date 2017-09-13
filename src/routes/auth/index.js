import React from 'react'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import SignUpRoute from 'routes/auth/SignUp'

const AuthRoute = ({ match }) => (
  <Grid container>
    <Grid item xs={12}>
      <Route path={match.path + '/sign-up'} component={SignUpRoute} />
    </Grid>
  </Grid>
)

export default AuthRoute
