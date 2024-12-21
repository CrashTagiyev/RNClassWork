import {TouchableOpacity, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../MMKV/storage';
import {request, PERMISSIONS} from 'react-native-permissions';
import {launchImageLibrary} from 'react-native-image-picker';
import {useEffect, useState} from 'react';
const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(``);
  const [selectedImageUrl, setSelectedImageUrl] = useState(``);
  const navigation = useNavigation();

  useEffect(()=>{
    console.log(selectedImageUrl)
    console.log(`--------------------------------------------------------`)
    // console.log(selectedImage)
  },[selectedImageUrl,selectedImage])

  return (
    <View className="p-[10px] gap-4">
    
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('EditProfile', {message: 'hello'});
          request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
            .then(result => {
              if (result === `granted`) {
                launchImageLibrary(
                  {
                    mediaType: `photo`,
                    includeBase64:true,
                  },
                  response => {
                    if (!response.didCancel && !response.errorMessage) {
                      const data = response.assets[0];
                      setSelectedImage(data.base64)
                      setSelectedImageUrl(data.uri)
                    }
                  },
                );
              } else {
                Alert.alert(`Error`,`Could not open image`)
              }
            })
            .catch(error => {
              console.error('Permission request error: ', error);
            });
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
