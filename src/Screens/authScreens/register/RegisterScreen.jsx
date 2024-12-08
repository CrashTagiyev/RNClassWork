import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {register} from '../../../Fetchs/auth/authFetchs';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({});

  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };
  const navigation = useNavigation()

  return (
    <ScrollView className="flex-1 gap-4 p-6">
      <TextInput
        onChangeText={text => {
          onChangeInput('email', text);
        }}
        placeholder="Email address"
        placeholderTextColor="#767676"
        className="border border-zinc-300"
        style={{color: 'black'}}
      />
      <TextInput
        onChangeText={text => {
          onChangeInput('password', text);
        }}
        placeholderTextColor="#767676"
        placeholder="Password"
        className="border border-zinc-300"
        style={{color: 'black'}}
      />
      <TextInput
        onChangeText={text => {
          onChangeInput('firstname', text);
        }}
        placeholderTextColor="#767676"
        placeholder="Firstname"
        className="border border-zinc-300"
        style={{color: 'black'}}
      />
      <TextInput
        onChangeText={text => {
          onChangeInput('lastname', text);
        }}
        placeholderTextColor="#767676"
        placeholder="Lastname"
        className="border border-zinc-300"
        style={{color: 'black'}}
      />
      <TouchableOpacity
        onPress={async () => {
          try {
            var data = await register(formData);
            if (data.error) Alert.alert('Failed', data.error.message);
            else Alert.alert(`Success`,data.message);
          } catch (error) {}
        }}
        className="justify-center mt-3 rounded-xl bg-violet-600 h-[50px]">
        <Text className="text-center color-white">Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        className=" py-5 rounded-lg">
        <Text className="text-center text-black">Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
