import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from '../Screens/ProfileScreens/EditProfile';
import Profile from '../Screens/ProfileScreens/Profile';
const Stack = createNativeStackNavigator()


const ProfileStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: true}} >
    <Stack.Screen  name="Profile" component={Profile}/>
    <Stack.Screen options={{title:"Edit profile"}} name="EditProfile" component={EditProfile}/>
   </Stack.Navigator>
  )
}

export default ProfileStack

