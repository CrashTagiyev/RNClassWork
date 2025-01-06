import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {NETFLIX_API_URI} from '@src/Utils/Uris';
import NetflixIcon from '@assets/netflix-logo-icon.svg';
import PlayIcon from '@assets/play.svg';
import DownloadIcon from '@assets/download.svg';
import SearchDetailsSimilars from './components/SearchDetailsSimilars';

const SearchDetailsScreen = () => {
  const [content, setContent] = useState({});
  const [trailer, setTrailer] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const route = useRoute();
  const {id, type} = route?.params;
  const [showMore, setShowMore] = useState(false);


  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setIsPlaying(false);
      Alert.alert('Video has finished playing!');
    }
  }, []);

  const getContent = async () => {
    const detailsResponse = await fetch(
      `${NETFLIX_API_URI}/${type}/${id}/details`,
    );

    const trailersResponse = await fetch(
      `${NETFLIX_API_URI}/${type}/${id}/trailers`,
    );

    const data = await detailsResponse.json();
    const trailers = await trailersResponse.json();
    setTrailer(trailers.trailers[0]);
    setContent(data.content);
  };
  const togglePlaying = useCallback(() => {
    setIsPlaying(prev => !prev);
  });

  useEffect(() => {
    getContent();
  }, []);


  if (!id || !type) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-xl">Invalid content details</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1  bg-black">
      <YoutubeIframe
        height={240}
        videoId={trailer?.key || ''}
        onChangeState={onStateChange}
        play={isPlaying}
      />
 
      <View className="flex-1 px-[5px] py-[10px]">
        <View className="flex-row">
          <NetflixIcon />
          <Text className="text-[#FFFFFFCC] text-lg">
            {type === 'tv' ? 'Series' : 'Movies'}
          </Text>
        </View>

        <Text className="text-white text-3xl mt-[5px]">{content.title}</Text>

        <TouchableOpacity
          className="bg-white flex-row mt-[30px] items-center justify-center h-[35px]"
          onPress={togglePlaying}>
          <View className="flex-row w-[50px] h-[31px] justify-center items-center">
            <PlayIcon />
            <Text className="text-black text-l">
              {isPlaying ? 'Pause' : 'Play'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#353236] flex-row mt-[10px] items-center justify-center h-[35px]">
          <View className="flex-row w-[80px] h-[31px] justify-center gap-[2] items-center">
            <DownloadIcon />
            <Text className="text-white text-l">Download</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text className="text-white text-lg mt-[10px]">
            {showMore
              ? content.overview
              : content.overview && content.overview.slice(0, 50)}{' '}
          </Text>
          <Text className="text-lg text-blue-500">{!showMore && 'more'}</Text>
        </TouchableOpacity>
        <SearchDetailsSimilars id={id} type={type} />
      </View>
    </ScrollView>
  );
};

export default SearchDetailsScreen;
