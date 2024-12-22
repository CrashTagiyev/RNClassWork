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
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {
  const [formData, setFormData] = useState({});
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);
  const navigation = useNavigation();
  const onChangeInput = (name, text) => {
    setFormData(prev => ({...prev, [name]: text}));
  };
  const {t} = useTranslation()
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
        <TouchableOpacity
          onPress={() => {
            setIsPasswordInvisible(p => !p);
          }}
          className="h-[50] w-[50] z-999   absolute left-[289] top-[95] ">
          <View className="flex-1 justify-center items-center h-[20] w-[30]">
            {!isPasswordInvisible ? <SeePassword /> : <UnSeePassword />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const data = await login(formData);
            if (data.message) Alert.alert('Validation error', data.message);
            else {
              storage.set('accessToken', data.accessToken);
              storage.set('refreshToken', data.refreshToken);
            }
          }}
          className="bg-[#E50A14] py-5 mt-8">
          <Text className="text-center text-white text-xl font-extrabold">
            {t("signIn")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          className=" py-5 rounded-lg">
          <Text className="text-center text-white">
            {t("doesntHaveAccount")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          className=" rounded-lg">
          <Text className="text-center text-white">{t("recoverPassword")}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
