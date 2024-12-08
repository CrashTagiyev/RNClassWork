
import React from 'react'
import "./global.css"
import 'react-native-gesture-handler';
import { View, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/Stacks/Navigation'


const App = () => {
  
  return (
    <SafeAreaProvider  >
      <SafeAreaView className="flex-1" >
          <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

