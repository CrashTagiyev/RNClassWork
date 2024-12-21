import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import HomeStack from './HomeStack';
import NewAndHotStack from './NewAndHotStack';
import DownloadsStack from './DownloadsStack';


const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBar={({state, descriptors, navigation}) => (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="New & Hot" component={NewAndHotStack} />
      <Tab.Screen name="Downloads" component={DownloadsStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
