import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DownloadsScreen from '../Screens/downloadsScreens/DownloadsScreen';
import {Dimensions, Text, TouchableOpacity, View, Image} from 'react-native';
import SearchIcon from '../../assets/tabIcons/search.svg';
import ScreenCastIcon from '../../assets/tabIcons/screenCast.svg';
import { OnBoardingItems } from '../Screens/onBoarding/items/onBoardingItems';


const Stack = createNativeStackNavigator()


const DownloadsStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: true}} >
    <Stack.Screen 
            options={{
                headerStyle: {
                  backgroundColor: `#141115`,
                },
                headerTitle: () => (
                  <View className="flex-1  -white flex-row justify-between items-center z-10 relative ">
                    {/* <NetflixIcon /> */}
                    <Text className="text-white text-2xl">Downloads</Text>
                    <View className="flex-row gap-[11]">
                      <TouchableOpacity>
                        <ScreenCastIcon />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <SearchIcon />
                      </TouchableOpacity>
                      <TouchableOpacity className="h-[30] w-[40] -">
                        <Image
                          resizeMode="cover"
                          style={{ height: 30, width: 40 }}
                          source={OnBoardingItems[0].image}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ),
                tabBarStyle: {
                  backgroundColor: '#141115',
                  height: 70,
                },
              }}
    name="DownloadsScreen" component={DownloadsScreen}/>
   </Stack.Navigator>
  )
}

export default DownloadsStack

