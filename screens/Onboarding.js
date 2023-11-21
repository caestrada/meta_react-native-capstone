import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Onboarding extends Component {
  render() {
    return (
      <View>
        {/* Header */}
        <View>
            <Image source={require('../assets/images/Logo.png')} />
        </View>
        <Text>Onboarding!!!!</Text>
      </View>
    )
  }
}