import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../Screens/authScreens/register/RegisterScreen';
import LoginScreen from '../Screens/authScreens/login/LoginScreen';
import Onboarding from '../Screens/onBoarding/OnBoarding';
import {useMMKVBoolean} from 'react-native-mmkv';
const Stack = createNativeStackNavigator();
import NetflixIcon from '../../assets/onBoardingPngs/NetflixIcon.svg';

const AuthStack = () => {
  const [isUserFirstTime = true, setIsUserFirstTime] =
    useMMKVBoolean(`isUserFirstTime`);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          height: '100',
        },
        headerTitle: () => (
          <View style={{paddingLeft: '43'}} className=" z-10 relative ">
            <NetflixIcon />
            <TouchableOpacity className="absolute right-7 top-3">
              <Text className="text-white">Help</Text>
            </TouchableOpacity>
          </View>
        ),
        headerTintColor: 'white',
      }}>
      {isUserFirstTime ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Onboarding}
        />
      ) : null}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
