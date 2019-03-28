import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'

import api from '~/services/api'

import styles from './styles'
import AddRepository from './AddRepository'
import Divider from '~/components/Divider'
import Repository from './Repository'

class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues'
  }

  state = {
    repositories: [],
    loading: false,
    error: null
  }

  addRepository = async repository => {
    await this.setState({ error: null, loading: true })
    try {
      const { data } = await api.get(`/repos/${repository}`)
      await this.setState({
        repositories: [data, ...this.state.repositories]
      })
      AsyncStorage.setItem(
        'repositories',
        JSON.stringify(this.state.repositories)
      )
    } catch (err) {
      this.setState({ error: err.response.data.message })
    } finally {
      this.setState({ loading: false })
    }
  }

  async componentDidMount () {
    const repositories = await AsyncStorage.getItem('repositories')

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) })
    }
  }

  handleAddRepository = async repository => {
    this.addRepository(repository)
  }

  handleRemoveRepository = async repository => {
    await this.setState({
      repositories: this.state.repositories.filter(r => r.id !== repository.id)
    })
    AsyncStorage.setItem(
      'repositories',
      JSON.stringify(this.state.repositories)
    )
  }

  render () {
    const { repositories, loading, error } = this.state
    return (
      <View style={styles.container}>
        <AddRepository onAddRepository={this.handleAddRepository} />
        <Divider />
        {loading && <ActivityIndicator style={styles.loading} />}
        {!!error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <ScrollView style={styles.repositories}>
          {repositories.length > 0 &&
            repositories.map(repository => (
              <Repository
                key={repository.id}
                repository={repository}
                onRemoveRepository={this.handleRemoveRepository}
              />
            ))}
        </ScrollView>
      </View>
    )
  }
}

export default Repositories
