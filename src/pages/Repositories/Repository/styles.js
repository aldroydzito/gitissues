import { StyleSheet } from 'react-native'
import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  left: {
    flexDirection: 'row'
  },

  avatar: {
    height: 48,
    width: 48
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
