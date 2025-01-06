import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import {useMMKVString} from 'react-native-mmkv';
import {useEffect} from 'react';
import {jwtDecode} from 'jwt-decode/build/cjs';

const Navigation = () => {
  const [accessToken, setAccessToken] = useMMKVString('accessToken');

  const checkIsTokenExpired = async () => {
    try {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) setAccessToken('');
    } catch (error) {
      console.error('Invalid token:', error.message);
    }
  };

  useEffect(() => {
    checkIsTokenExpired();
  }, []);

  return (
    <NavigationContainer>
      {accessToken ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
