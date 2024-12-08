import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import {useEffect, useState} from 'react';
import { useMMKVString } from 'react-native-mmkv';
const Navigation = () => {
  const [accessToken, setAccessToken] = useMMKVString("accessToken");

  return (
    <NavigationContainer>
      {accessToken ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
