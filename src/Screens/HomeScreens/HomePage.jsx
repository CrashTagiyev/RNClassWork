import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity, Text} from 'react-native';
import {getProducts} from '../../Fetchs/products/productsFetch';
import ProductCart from './ProductCart';
import {getTrensingTvShows} from '../../Fetchs/tvShows/trendingTvShows';
import {storage} from '../../MMKV/storage';

const HomePage = () => {
  const [products, setProducts] = useState([]);


  return (
    <View className="flex-1 pl-[10px] pr-[10px] bg-[#141115] ">
      <TouchableOpacity
      className='h-20 w-30'
        onPress={async () => {
          await getTrensingTvShows();
        }}>
        <Text className='text-white'>Fetch</Text>
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

export default HomePage;
