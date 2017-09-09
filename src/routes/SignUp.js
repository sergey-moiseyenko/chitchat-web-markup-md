import React from 'react'
import { withStyles } from 'material-ui/styles'
import SignUp from '../components/SignUp'

const styles = theme => ({
  signUpPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 8
  }
})

const SignUpRoute = ({ classes }) => (
  <div className={classes.signUpPage}>
    <SignUp />
  </div>
)

export default withStyles(styles)(SignUpRoute)
