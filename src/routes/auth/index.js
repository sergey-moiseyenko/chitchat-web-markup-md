import React from 'react'
import { Route } from 'react-router-dom'
import SignUpRoute from 'routes/auth/SignUp'

const AuthRoute = ({ match }) => (
  <div>
    <Route path={match.path + '/sign-up'} component={SignUpRoute} />
  </div>
)

export default AuthRoute
