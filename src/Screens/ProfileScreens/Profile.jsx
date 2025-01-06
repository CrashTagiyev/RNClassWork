import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useMMKVString} from 'react-native-mmkv';
import {NETFLIX_API_URI} from '@src/Utils/Uris';
import {jwtDecode} from 'jwt-decode/build/cjs';
import NotificationIcon from '@assets/profileIcons/notificationIcon.svg';
import SettingsIcon from '@assets/profileIcons/settingsIcon.svg';
import CheckedIcon from '@assets/profileIcons/checkedIcon.svg';
import HelpIcon from '@assets/profileIcons/helpIcon.svg';
import AccountIcon from '@assets/profileIcons/accountIcon.svg';
import ArrowRightIcon from '@assets/profileIcons/arrowRightIcon.svg';
import EditIcon from '@assets/profileIcons/editIcon.svg';
const imageUri = require('../../../assets/onBoardingPngs/onBoard1.png');
const Profile = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useMMKVString('accessToken');
  const [userDetail, setUserDetail] = useState({});
  const getUserInfo = async () => {
    const userId = jwtDecode(accessToken).userId;
    const response = await fetch(
      `${NETFLIX_API_URI}/auth/getuserbyid/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    setUserDetail(data.user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        display: `flex`,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className=" pt-5 pb-[5] bg-black">
      <View className="mt-5 items-center justify-center">
        <Text className="text-white  text-3xl text-center">
          {userDetail.username}
        </Text>
        <Image
          style={{width: 120, height: 120, borderRadius: 5}}
          source={imageUri}
          className="  opacity-[0.70]"
          resizeMode={`contain`}
        />
        <TouchableOpacity className="flex-row gap-2 mr-3 mt-2">
          <EditIcon />
          <Text className="text-[#B5B2B6]  text-xl">Manage Profile</Text>
        </TouchableOpacity>
      </View>
      <View className="gap-1  mb-3">
        <TouchableOpacity className="flex-row h-[56] bg-[#141115] justify-between items-center p-2">
          <View className="flex-row gap-[11px] items-center justify-center">
            <NotificationIcon />
            <Text className="w-[100px] text-[#B5B2B6] text-xl text-center">
              Notifications
            </Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row h-[56] bg-[#141115] justify-between items-center p-2">
          <View className="flex-row gap-[11px] items-center justify-center">
            <CheckedIcon />
            <Text className="w-[100px] text-[#B5B2B6] text-xl text-start">
              My List
            </Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row h-[56] bg-[#141115] justify-between items-center p-2">
          <View className="flex-row gap-[11px] items-center justify-center">
            <SettingsIcon />
            <Text className="w-[100px] text-[#B5B2B6] text-xl text-start">
              App Settings
            </Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row h-[56] bg-[#141115] justify-between items-center p-2">
          <View className="flex-row gap-[11px] items-center justify-center">
            <AccountIcon />
            <Text className="w-[100px] text-[#B5B2B6] text-xl text-start">
              Account
            </Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row h-[56] bg-[#141115] justify-between items-center p-2">
          <View className="flex-row gap-[11px] items-center justify-center">
            <HelpIcon />
            <Text className="w-[100px] text-[#B5B2B6] text-xl text-start">
              Help
            </Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
