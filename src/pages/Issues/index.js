import React, { Component } from 'react'
import {
  View,
  SegmentedControlIOS,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { withNavigation } from 'react-navigation'

import api from '~/services/api'

import styles from './styles'
import Issue from './Issue'

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name
  })

  state = {
    issues: [],
    loading: true,
    filter: null,
    filterIndex: 0,
    filteredIssues: []
  }

  async componentDidMount () {
    const { navigation } = this.props
    const { data } = await api.get(
      `/repos/${navigation.state.params.repository.full_name}/issues?state=all`
    )

    this.setState({ issues: data, filteredIssues: data, loading: false })
  }

  handleFilter = async event => {
    const { selectedSegmentIndex: filterIndex } = event.nativeEvent
    // await this.setState({ filter: selected })

    // return

    const issueState =
      filterIndex === 1 ? 'open' : filterIndex === 2 ? 'closed' : null

    await this.setState({
      filterIndex,
      filteredIssues: issueState
        ? this.state.issues.filter(issue => issue.state === issueState)
        : this.state.issues
    })
  }

  render () {
    const { filteredIssues, loading, filter, filterIndex } = this.state
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <>
            <View style={styles.segmented}>
              <SegmentedControlIOS
                values={['Todas', 'Abertas', 'Fechadas']}
                selectedIndex={filterIndex}
                onChange={this.handleFilter}
              />
            </View>
            <FlatList
              style={styles.issues}
              data={filteredIssues}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Issue issue={item} />}
            />
          </>
        )}
      </View>
    )
  }
}

export default withNavigation(Issues)
