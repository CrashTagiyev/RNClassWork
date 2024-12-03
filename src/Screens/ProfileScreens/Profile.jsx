import {TouchableOpacity, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className='p-[10px]'>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("EditProfile",{message:"hello"})
      }} className=" w-20 h-10 px-5 py-3 bg-violet-500 rounded-md">
        <Text className='text-white'>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

