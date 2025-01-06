import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../../Fetchs/auth/authFetchs';
import {storage} from '../../../MMKV/storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SeePassword from '../../../../assets/authAssets/eye.svg';
import UnSeePassword from '../../../../assets/authAssets/eyeSlash.svg';
import {useTranslation} from 'react-i18next';

const LoginScreen = () => {
  const [formData, setFormData] = useState({});
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);
  const navigation = useNavigation();
  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };
  const {t} = useTranslation();
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="flex-1 justify-center "
      className=" bg-[#141115]">
      <View className=" p-6 gap-2 bg-[#141115] relative">
        <TextInput
          onChangeText={text => {
            onChangeInput('email', text);
          }}
          placeholder="Email address"
          placeholderTextColor="#767676"
          className="border h-[52] bg-[#353236] pl-3"
          style={{color: 'white'}}
        />
        <View className='relative'>
          <TextInput
            passwordRules={true}
            onChangeText={text => {
              onChangeInput('password', text);
            }}
            placeholderTextColor="#767676"
            placeholder="Password"
            className=" mt-[15px] h-[52] bg-[#353236] pl-3"
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
            const data = await login(formData);
            if (data.message) Alert.alert('Validation error', data.message);
            else {
              storage.set('accessToken', data.token);
            }
          }}
          className="bg-[#E50A14] py-5 mt-8">
          <Text className="text-center text-white text-xl font-extrabold">
            {t('signIn')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          className=" py-5 rounded-lg">
          <Text className="text-center text-white">
            {t('doesntHaveAccount')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          className=" rounded-lg">
          <Text className="text-center text-white">{t('recoverPassword')}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
