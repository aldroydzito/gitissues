import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

const Issue = ({ issue, navigation }) => {
  handleCheckIssue = () => {
    Linking.openURL(issue.html_url)
  }

  return (
    <TouchableOpacity onPress={this.handleCheckIssue} style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {issue.title}
          </Text>
          <Text style={styles.owner}>{issue.user.login}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Icon style={styles.icon} name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  )
}

export default withNavigation(Issue)
