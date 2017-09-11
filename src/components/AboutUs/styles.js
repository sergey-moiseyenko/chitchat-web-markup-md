export default ({ mainColorPalette, spacing }) => ({
  content: {
    justifyContent: 'center',
    backgroundColor: mainColorPalette[50],
    paddingTop: spacing.unit * 5,
    paddingRight: '15%'
  },
  image: {
    minWidth: '200px',
    '&>img': {
      maxWidth: '100%',
      maxHeight: 'auto'
    }
  },
  info: {
    minWidth: '200px',
    fontSize: '1.25rem',
    color: mainColorPalette[500]
  }
})
