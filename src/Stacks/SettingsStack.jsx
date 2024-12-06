import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../Screens/SettingScreens/SettingsScreen';
import ChangePassword from '../Screens/SettingScreens/ChangePassword';
const stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen  name="SettingsScreen" component={SettingsScreen}/>
      <stack.Screen options={{title:"Change password"}} name="ChangePassword" component={ChangePassword}/>
    </stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});
