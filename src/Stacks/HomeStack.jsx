import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Screens/HomeScreens/HomePage';
import DetailsPage from '../Screens/HomeScreens/DetailsPage';
const Stack = createNativeStackNavigator()


const HomeStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: true}} >
    <Stack.Screen  name="Home" component={HomePage}/>
    <Stack.Screen name="Details" component={DetailsPage}/>
   </Stack.Navigator>
  )
}

export default HomeStack

