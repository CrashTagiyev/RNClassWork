import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity, Text} from 'react-native';
import {getProducts} from '../../Fetchs/products/productsFetch';
import ProductCart from './ProductCart';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <View className="p-[10px] justify-center items-start">
      <ScrollView horizontal={true} className=' w-[330px] h-[30px]'>
        <TouchableOpacity className='w-[115px] h-[30px] border-r p-1 justify-center  border-r-green-500'><Text className='color-green-500 text-center justify-center'>Button1</Text></TouchableOpacity>
        <TouchableOpacity className='w-[115px] h-[30px] border-r p-1 justify-center  border-r-green-500'><Text className='color-green-500 text-center justify-center'>Button2</Text></TouchableOpacity>
        <TouchableOpacity className='w-[115px] h-[30px] border-r p-1 justify-center  border-r-green-500'><Text className='color-green-500 text-center justify-center'>Button3</Text></TouchableOpacity>
        <TouchableOpacity className='w-[115px] h-[30px] border-r p-1 justify-center  border-r-green-500'><Text className='color-green-500 text-center justify-center'>Button4</Text></TouchableOpacity>
      </ScrollView>
      <FlatList
        contentContainerStyle={{padding: 16, gap: 16}}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        data={products}
        renderItem={({item}) => <ProductCart product={item} />}
      />
    </View>
  );
};

export default HomePage;
