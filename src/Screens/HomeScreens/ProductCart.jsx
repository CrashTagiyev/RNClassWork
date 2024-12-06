import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductCart = ({product}) => {
  
  const nav = useNavigation();

  const toDetailScreen = () => {
    nav.navigate('Details', {id: product._id});
  };
  return (
    <TouchableOpacity
      onPress={toDetailScreen}
      className="shadow shadow-gray-700 bg-white rounded-lg gap-4 h-[240px] p-6">
      <Image
        className="h-[150px]"
        resizeMode="contain"
        source={{uri: product.gallery[0]}}
      />
      <View className="flex-1">
        <Text className="font-extrabold" numberOfLines={1}>
          {product.title}
        </Text>
        <Text className="size-64" numberOfLines={1}>
          {product.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCart;

const styles = StyleSheet.create({});
