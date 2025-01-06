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
import {t} from 'i18next';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({});
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      className="bg-[#141115]">
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
        <View>
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
          <View className=" absolute right-1 top-7 h-10">
            <TouchableOpacity
              className=" h-10 w-10 mr-3"
              onPress={() => {
                setIsPasswordInvisible(p => !p);
              }}>
              {!isPasswordInvisible ? <SeePassword /> : <UnSeePassword />}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            try {
              var data = await register(formData);
              if (data.error) Alert.alert('Failed', data.error.message);
              else Alert.alert(`Success`, data.message);
            } catch (error) {}
          }}
          className="justify-center mt-3  bg-[#E50A14] h-[50px]">
          <Text className="text-center color-white">{t('register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          className=" py-5 rounded-lg">
          <Text className="text-center text-white">{t('signIn')}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
