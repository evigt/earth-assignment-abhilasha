import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/Screens'
const App = () => {
  return (
    <View style={styles.root}>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
