import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import styles from './styles'

const SignUp = ({ classes }) => (
  <Paper className={classes.container} elevation={4}>
    <div className={classes.title}>
      <h2>Sign Up</h2>
    </div>
    <form className={classes.form}>
      <TextField
        id="email"
        className={classes.textFiled}
        label="Email"
        type="email"
        margin="normal"
      />
      <TextField
        id="password"
        className={classes.textFiled}
        label="Password"
        type="password"
        margin="normal"
      />
      <Button raised color="primary" className={classes.button}>
        GET STARDED
      </Button>
    </form>
  </Paper>
)

export default withStyles(styles)(SignUp)
