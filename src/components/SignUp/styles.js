export default ({ mainColorPalette, spacing }) => ({
  container: {
    display: 'inline-flex',
    flexDirection: 'column'
  },
  title: {
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[500],
    paddingLeft: spacing.unit * 4,
    paddingTop: spacing.unit,
    paddingBottom: spacing.unit
  },
  form: {
    display: 'inline-flex ',
    flexDirection: 'column',
    paddingLeft: spacing.unit * 4,
    paddingRight: spacing.unit * 4,
    marginBottom: spacing.unit * 6
  },
  textFiled: {
    width: '300px',
    minWidth: '100px'
  },
  button: {
    color: mainColorPalette[50],
    backgroundColor: mainColorPalette[300],
    paddingTop: spacing.unit * 2.5,
    paddingBottom: spacing.unit * 2.5,
    marginTop: spacing.unit * 7,
    '&:hower': {
      backgroundColor: mainColorPalette[500]
    }
  }
})
