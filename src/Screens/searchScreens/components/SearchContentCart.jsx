import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NoImageIcon from '@assets/noImage.svg';
const SearchContentCart = ({item, type, isTopTen, isInAnotherStack}) => {
  const nav = useNavigation();

  const toDetailScreen = () => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
    nav.navigate('SearchDetails', {
      id: item.id,
      type: item.media_type ? item.media_type : type,
    });
  };

  return (
    <TouchableOpacity
      className="relative h-[165px] w-[115px]  m-[10px]"
      onPress={() => {
        if (type !== 'person') {
          toDetailScreen();
        }
      }}>
      {item.poster_path || item.profile_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${
              item.poster_path || item.profile_path
            }`,
          }}
          style={{width: 115, height: 165, borderRadius: 8}}
        />
      ) : (
        <View className='bg-[#353236] flex-1 flex-column items-center justify-center'>
          <NoImageIcon />
          <Text className=' text-1xl text-center text-black'>No Image</Text>
        </View>
      )}
      {isTopTen && (
        <View className="flex-1 flex-column absolute w-[27] h-[38] right-[0.1] items-center bg-[#E50A14]">
          <Text className="text-white ">TOP</Text>
          <Text className="text-white text-1xl">5</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SearchContentCart;
