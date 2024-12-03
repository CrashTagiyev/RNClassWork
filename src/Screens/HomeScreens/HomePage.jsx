import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomePage = () => {
  const nav = useNavigation();
  return (
    <View className="p-[10px] gap-2">
      <Text>Home Page</Text>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('Details', {message: 'hello'});
        }}
        className="w-[100px] h-[30px] rounded-md bg-blue-500 justify-center">
        <Text className="text-center text-white ">Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
