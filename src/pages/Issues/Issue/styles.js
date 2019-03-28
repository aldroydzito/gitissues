import { StyleSheet } from 'react-native'
import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: metrics.basePadding * 3
  },

  right: {
    justifyContent: 'center'
  },

  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24
  },

  info: {
    marginLeft: metrics.baseMargin,
    justifyContent: 'space-around'
  },

  title: {
    fontWeight: 'bold'
  },

  owner: {
    color: colors['grey-dark']
  },

  icon: {
    color: colors['grey-darker']
  }
})

export default styles
