import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getTrendingMovies} from '../../../Fetchs/movies/trendingMovies';
import ContentCart from './ContentCart';
import { getTrendingTvShows } from '../../../Fetchs/tvShows/trendingTvShows';

const TrendingTvShows = ({}) => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    getTrendingTvShows().then(data => {
      setTvShows(data);
    });
  }, []);

  return (
    <View className="flex-column justify-start items-start ">
      <Text className="text-white text-start text-2xl">Trending TV Shows</Text>
      <FlatList
        horizontal
        data={tvShows}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({item, index}) => (
          <ContentCart
            isTopTen={index >= 0 && index <= 4 ? true : false}
            item={item} type={item.media_type}/>
        )}
      />
    </View>
  );
};

export default TrendingTvShows;
