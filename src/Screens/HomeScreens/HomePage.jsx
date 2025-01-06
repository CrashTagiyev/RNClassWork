import {ScrollView} from 'react-native';

import TrendingMovies from './components/TrendingMovies';
import TrendingTvShows from './components/TrendingTvShows';

const HomePage = () => {
  return (
    <ScrollView className="flex-1 px-[20px]  relative bg-[#141115]">
      <TrendingMovies />
      <TrendingTvShows />
    </ScrollView>
  );
};

export default HomePage;
