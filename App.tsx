
import React, { useEffect } from 'react'
import "./global.css"
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/Stacks/Navigation'
import { useTranslation } from 'react-i18next';
import { useMMKVString } from 'react-native-mmkv';
import "./src/locales/index"
const App = () => {

  const [selectedLanguage=`en`, setSelectedLanguage] = useMMKVString("selectedLanguage")
  const { i18n } = useTranslation();

  useEffect(() => {
    if (selectedLanguage)
      i18n.changeLanguage(selectedLanguage)
  }, [selectedLanguage])
  return (
    <SafeAreaProvider >
      <SafeAreaView className="flex-1" >
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

