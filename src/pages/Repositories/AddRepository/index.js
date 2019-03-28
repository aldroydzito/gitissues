import React, { Component } from 'react'
import { View, ScrollView, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

class AddRepository extends Component {
  state = {
    repository: ''
  }

  addRepository = repository => {
    this.props.onAddRepository(repository)
    this.setState({ repository: '' })
  }

  render () {
    const { repository } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Adicionar novo repositório"
          onSubmitEditing={() => this.addRepository(repository)}
          value={repository}
          onChangeText={text => this.setState({ repository: text })}
        />
        <TouchableOpacity onPress={() => this.addRepository(repository)}>
          <Icon style={styles.icon} name="plus" size={24} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddRepository
