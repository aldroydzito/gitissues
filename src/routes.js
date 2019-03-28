import { createStackNavigator, createAppContainer } from 'react-navigation'

import Repositories from '~/pages/Repositories'
import Issues from '~/pages/Issues'

const Navigation = createStackNavigator({
  Repositories,
  Issues
})

export default createAppContainer(Navigation)
