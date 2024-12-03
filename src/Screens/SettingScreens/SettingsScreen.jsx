import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const nav = useNavigation();
  return (
    <View className="flex-1 gap-2 p-[10px]">
      <Text>SettingsScreen</Text>
      <TouchableOpacity className='h-[30px] w-[130px] justify-center bg-orange-500 rounded-md' onPress={()=>{ nav.navigate("ChangePassword",{message:"Hello"})}}>
        <Text className='text-white text-center'>Change password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
