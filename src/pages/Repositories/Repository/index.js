import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

const Repository = ({ repository, navigation, onRemoveRepository }) => (
  <TouchableOpacity
    onLongPress={() => onRemoveRepository(repository)}
    onPress={() => navigation.navigate('Issues', { repository })}
    style={styles.container}
  >
    <View style={styles.left}>
      <Image
        style={styles.avatar}
        source={{ uri: repository.owner.avatar_url }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{repository.name}</Text>
        <Text style={styles.owner}>{repository.owner.login}</Text>
      </View>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={20} />
  </TouchableOpacity>
)

export default withNavigation(Repository)
