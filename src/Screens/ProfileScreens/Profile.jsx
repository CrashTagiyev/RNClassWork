import {TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../MMKV/storage';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className="p-[10px] gap-4">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditProfile', {message: 'hello'});
        }}
        className=" w-[100px] h-[40px] justify-center bg-violet-500 rounded-md">
        <Text className="text-white text-center">Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          storage.clearAll();
        }}
        className=" w-[100px] h-[40px] justify-center bg-red-500 rounded-md">
        <Text className="text-white text-center">LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
