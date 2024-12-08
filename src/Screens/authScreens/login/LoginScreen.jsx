import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../../Fetchs/auth/authFetchs';
import {storage} from '../../../MMKV/storage';

const LoginScreen = () => {
  const [formData, setFormData] = useState({});
  const navigation = useNavigation();
  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };

  return (
    <View className="p-6 gap-2">
      <TextInput
        onChangeText={text => {
          onChangeInput('email', text);
        }}
        placeholder="Email address"
        placeholderTextColor="#767676"
        className="border border-zinc-400 pl-2"
        style={{color: 'black'}}
      />
      <TextInput
        onChangeText={text => {
          onChangeInput('password', text);
        }}
        placeholderTextColor="#767676"
        placeholder="Password"
        className="border border-zinc-400 pl-2"
        style={{color: 'black'}}
      />
      <TouchableOpacity
        onPress={async () => {
          const data = await login(formData);
          if (data.message) Alert.alert('Validation error', data.message);
          else {
            storage.set('accessToken', data.accessToken);
            storage.set('refreshToken', data.refreshToken);
          }
        }}
        className="bg-violet-600 py-5 rounded-lg mt-8">
        <Text className="text-center text-white text-xl font-extrabold">
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}
        className=" py-5 rounded-lg">
        <Text className="text-center text-black">Doesn`t have a account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
