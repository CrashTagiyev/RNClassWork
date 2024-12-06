import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';


const Tab= createBottomTabNavigator()


const TabStack = () => {
  return (
   <Tab.Navigator  screenOptions={{headerShown: false}}>
    <Tab.Screen  name='Home' component={HomeStack}/>
    <Tab.Screen name='Profile' component={ProfileStack}/>
    <Tab.Screen name='Settings' component={SettingsStack}/>
   </Tab.Navigator>
  )
}

export default TabStack
