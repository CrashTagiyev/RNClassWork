import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import { useEffect } from 'react';

const Navigation = () => {
  const [accessToken, setAccessToken] = useMMKVString('accessToken');
  
  useEffect(()=>{
    
    console.log(accessToken)
  },[accessToken])
  return (

    <NavigationContainer>
      {accessToken ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  )
  
};

export default Navigation;
