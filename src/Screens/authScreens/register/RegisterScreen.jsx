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
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SeePassword from '../../../../assets/authAssets/eye.svg';
import UnSeePassword from '../../../../assets/authAssets/eyeSlash.svg';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({});
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" className="bg-[#141115]">
      <View className="flex-1 gap-4 p-6">
        <TextInput
          onChangeText={text => {
            onChangeInput('username', text);
          }}
          placeholderTextColor="#767676"
          placeholder="Username"
          className=" mt-[15px] h-[52] bg-[#353236] pl-2"
          style={{color: 'white'}}
        />
        <TextInput
          onChangeText={text => {
            onChangeInput('email', text);
          }}
          placeholder="Email address"
          placeholderTextColor="#767676"
          className=" mt-[15px] h-[52] bg-[#353236] pl-2"
          style={{color: 'white'}}
        />
        <TextInput
          onChangeText={text => {
            onChangeInput('password', text);
          }}
          placeholderTextColor="#767676"
          placeholder="Password"
          className=" mt-[15px] h-[52] bg-[#353236] pl-2"
          style={{color: 'white'}}
          secureTextEntry={isPasswordInvisible}
        />
        <TouchableOpacity
          onPress={() => {
            setIsPasswordInvisible(p => !p);
          }}
          className="h-[50] w-[50]   absolute left-[295] top-[199] ">
          <View className="flex-1 justify-center items-center h-[20] w-[30]">
            {!isPasswordInvisible ? <SeePassword /> : <UnSeePassword />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            try {
              var data = await register(formData);
              if (data.error) Alert.alert('Failed', data.error.message);
              else Alert.alert(`Success`, data.message);
            } catch (error) {}
          }}
          className="justify-center mt-3  bg-[#E50A14] h-[50px]">
          <Text className="text-center color-white">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          className=" py-5 rounded-lg">
          <Text className="text-center text-white">Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
