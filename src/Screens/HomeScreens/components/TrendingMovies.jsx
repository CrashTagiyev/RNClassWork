import {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {getTrendingMovies} from '../../../Fetchs/movies/trendingMovies';
import ContentCart from './ContentCart';
import {useNavigation} from '@react-navigation/native';

const TrendingMovies = ({}) => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getTrendingMovies().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      {movies.length > 0 && movies[0].poster_path ? (
        <View className="  w-[400] h-[510px] mt-10">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movies[0].poster_path}`,
            }}
            style={{width: '100%', height: '100%', borderRadius: 10}}
            resizeMode="cover"
          />
          <View className=" bottom-[10px] flex-1 flex-row justify-evenly w-[390px] absolute">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {
                  id: movies[0].id,
                  type: movies[0].media_type,
                  playVideo: true,
                });
              }}
              className="w-[169] h-[42] justify-center rounded-[8px] bg-white">
              <Text className="text-black text-center text-2xl ">Play</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[169] h-[42] justify-center rounded-[8px] bg-[#2E2B2F]">
              <Text className="text-white text-center text-2xl">+ My List</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View className="flex-column justify-start items-start mt-[27px]">
        <Text className="text-white text-start text-2xl">Trending Movies</Text>
        <FlatList
          className=" h-[300px] w-[100%]"
          horizontal
          data={movies}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={({item, index}) => (
            <ContentCart
              item={item}
              type={item.media_type}
              isTopTen={index >= 0 && index <= 4 ? true : false}
            />
          )}
        />
      </View>
    </>
  );
};

export default TrendingMovies;
