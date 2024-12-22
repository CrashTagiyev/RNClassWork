import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../Screens/HomeScreens/HomePage';
import DetailsPage from '../Screens/HomeScreens/DetailsPage';
import {Dimensions, Text, TouchableOpacity, View, Image} from 'react-native';
import SearchIcon from '../../assets/tabIcons/search.svg';
import ScreenCastIcon from '../../assets/tabIcons/screenCast.svg';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const screenWidth = Dimensions.get('screen').width;
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: `#141115`,
          },
          headerTitle: () => (
            <View className="flex-1  -white flex-row justify-between items-center z-10 relative ">
              {/* <NetflixIcon /> */}
              <Text className="text-white text-2xl">Home</Text>
              <View className="flex-row gap-[11]">
                <TouchableOpacity>
                  <ScreenCastIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SearchIcon />
                </TouchableOpacity>
                <TouchableOpacity className="h-[30] w-[40] -">
                </TouchableOpacity>
              </View>
            </View>
          ),
          tabBarStyle: {
            backgroundColor: '#141115',
            height: 70,
          },
        }}
        name="HomeScreen"
        component={HomePage}
      />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
