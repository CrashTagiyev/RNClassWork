import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NETFLIX_API_URI} from '@src/Utils/Uris';
import {useMMKVString} from 'react-native-mmkv';
import {useNavigation} from '@react-navigation/native';
import SearchContentCart from './SearchContentCart';

const SearchDetailsSimilars = ({id, type}) => {
  const [token, setToken] = useMMKVString('token');
  const [Similiars, setSimiliars] = useState([]);
  const uri = `${NETFLIX_API_URI}/${type}/${id}/similar`;
  const nav = useNavigation();
  const getSimiliars = async () => {
    const response = await fetch(uri, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setSimiliars(data.similar.slice(0, 10));
  };

  useEffect(() => {
    getSimiliars();
  }, []);

  return (
    <View className="flex-column justify-start items-start mt-[27px]">
      <Text className="text-white text-start text-2xl">Similars</Text>
  
      <FlatList
        horizontal
        data={Similiars}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({item, index}) => (
          <SearchContentCart item={item} type={type}/>
        )}
      />
    </View>
  );
};

export default SearchDetailsSimilars;
