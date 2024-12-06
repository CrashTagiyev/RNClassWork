import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {getProductById} from '../../Fetchs/products/productById';

const DetailsPage = () => {
  const [product, setProduct] = useState({});
  const route = useRoute();

  const {id} = route.params;

  useEffect(() => {
    getProductById(id).then(data => {
      setProduct(data);
    });
  }, []);

  if (!product.title)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View className="flex-1 justify-between gap-[10px] p-10 border border-md">
      <View className="gap-2">
        <Image
          className="h-[150px] "
          resizeMode="contain"
          source={{uri: product.gallery[0]}}
        />
        <View className="items-center mt-2 ">
          <Text
            className=" self-start h-[30px] text-2xl font-extrabold"
            numberOfLines={1}>
            {product.title}
          </Text>
        </View>
        <View className="items-center mt-4">
          <Text className="self-start  font-normal">
            <Text className="font-bold">Category: </Text>
            {product.category}
          </Text>
        </View>
        <View className="items-center">
          <Text className="self-start  font-normal">
            <Text className="font-bold">Stocks: </Text>
            {product.stock}
          </Text>
        </View>
        <View className="items-center">
          <Text className="self-start  font-normal">
            <Text className="self-start  font-bold">Description: </Text>
            {product.description}
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text className="text-4xl align-middle font-bold h-20 text-right mr-1">
            {product.price + product.currency}
          </Text>
        </View>
        <TouchableOpacity className=" h-[50px]  justify-center bg-green-500 rounded-xl">
          <Text className="text-center color-white  text-3xl font-bold">
            Add to basket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsPage;
