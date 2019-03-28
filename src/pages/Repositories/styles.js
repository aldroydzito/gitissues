import { StyleSheet } from 'react-native'

import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['grey-lighter'],
    paddingHorizontal: metrics.basePadding
  },

  repositories: {
    flex: 1,
    marginTop: metrics.baseMargin
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  },

  error: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2.25
  },

  errorText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default styles
