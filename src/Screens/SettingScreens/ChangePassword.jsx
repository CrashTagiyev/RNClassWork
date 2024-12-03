import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ChangePassword = () => {
  const route = useRoute();
  const {message} = route.params;
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default ChangePassword;
