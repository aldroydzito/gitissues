import { StyleSheet } from 'react-native'

import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.baseMargin
  },

  input: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 1.5,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius
  },

  icon: {
    marginLeft: metrics.baseMargin * 1.5
  }
})

export default styles
