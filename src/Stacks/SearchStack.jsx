import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '@screens/searchScreens/SearchScreen.jsx';
import SearchDetailsScreen from '@screens/searchScreens/SearchDetailsScreen.jsx';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SearchDetails"
        component={SearchDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
