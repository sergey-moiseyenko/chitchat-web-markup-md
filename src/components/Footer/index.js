import React from 'react'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <span>© 2017 Chit-Chat</span>
  </div>
)

export default withStyles(styles)(Footer)
