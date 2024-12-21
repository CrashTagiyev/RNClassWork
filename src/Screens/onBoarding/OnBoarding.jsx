import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {act, useEffect, useState} from 'react';
import NetflixIcon from '../../../assets/onBoardingPngs/NetflixIcon.svg';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useMMKVString} from 'react-native-mmkv';

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(()=>{
  //   Orientation.lockToPortrait();
  // },[])
  const imageWidth = Dimensions.get('screen').width / 2;
  const [selectedLanguage, setSelectedLanguage] =
    useMMKVString('selectedLanguage');
  const {t} = useTranslation();

  const nav = useNavigation();
  const OnBoardingItems = [
    {
      image: require('../../../assets/onBoardingPngs/onBoard1.png'),
      title: t(`watchAnyDevice`),
      description: t(`streamDevices`),
      style: {
        imageSizeMode: 'contain',
        imageWidth: imageWidth,
        bottom: '150',
        textContainerBottom: selectedLanguage === 'en' ? `180` : `110`,
      },
    },
    {
      image: require('../../../assets/onBoardingPngs/onBoard2.png'),
      title: t('downloadFeature'),
      description: t('downloadDescription'),
      style: {
        imageSizeMode: 'contain',
        imageWidth: imageWidth,
        bottom: '150',
        textContainerBottom: `180`,
      },
    },
    {
      image: require('../../../assets/onBoardingPngs/onBoard3.png'),
      title: t('noContracts'),
      description: t('cancelAnytime'),
      style: {
        imageSizeMode: 'contain',
        imageWidth: imageWidth,
        bottom: '150',
        textContainerBottom: selectedLanguage === 'en' ? `180` : `150`,
      },
    },
    {
      image: require('../../../assets/onBoardingPngs/avangers.png'),
      title: t('howToWatch'),
      description: t('howToWatchDesc'),
      style: {
        imageSizeMode: 'cover',
        imageWidth: Dimensions.get('screen').width,
        bottom: '0',
        textContainerBottom: selectedLanguage === 'en' ? `325` : `310`,
      },
    },
  ];

  const OnboardItem = ({item}) => {
    return (
      <View
        className="items-center w-screen h-screen  relative  "
        style={{bottom: item.style.bottom}}>
        <Image
          style={{width: item.style.imageWidth}}
          source={item.image}
          className="  h-screen opacity-[0.70]"
          resizeMode={item.style.imageSizeMode}
        />
        <View
          className="absolute"
          style={{bottom: item.style.textContainerBottom}}>
          <Text className="text-[24px] font-bold text-white text-center">
            {item.title}
          </Text>
          <Text className="text-[20px] text-[#CCC] text-center">
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const Dots = () => {
    return (
      <View className="flex-row items-center justify-center gap-5 w-[82px]">
        {OnBoardingItems.map((_, index) => (
          <View
            key={index}
            className={`w-[8px] h-[8px] rounded-md ${
              index === activeIndex ? 'bg-[#E50914]' : 'bg-white'
            }`}
          />
        ))}
      </View>
    );
  };

  const handleScroll = event => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / Dimensions.get('screen').width,
    );
    setActiveIndex(slideIndex);
  };

  return (
    <ScrollView
      contentContainerClassName="flex-1 justify-between"
      showsVerticalScrollIndicator={false}
      className="flex-1  bg-black relative pb-[38px]">
      <View className=" z-10 w-full items-center relative mt-[10px] mb-[70px]">
        <NetflixIcon />
        <TouchableOpacity
          onPress={() => {
            setSelectedLanguage(prev => (prev === `en` ? `ru` : `en`));
          }}
          className="absolute right-7 top-2">
          <Text className="text-2xl text-white">
            {selectedLanguage === `en` ? `en` : `ru`}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        horizontal
        data={OnBoardingItems}
        renderItem={({item}) => <OnboardItem item={item} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="absolute"
      />
      <View className=" items-center mt-10 gap-[15px]">
        <Dots />
        <TouchableOpacity
          onPress={() => {
            nav.navigate(`Login`);
          }}
          className="bg-[#E50914] w-[330px] h-[42px] justify-center  mt-4">
          <Text className="text-white text-center">{t('getStarted')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;
const styles = StyleSheet.create({});
