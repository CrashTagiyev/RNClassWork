import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import HomeStack from './HomeStack';
import DownloadsStack from './DownloadsStack';
import { useTranslation } from 'react-i18next';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const {t} = useTranslation();
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
      <Tab.Screen name={t("home")} component={HomeStack} />
      <Tab.Screen name={t("search")} component={SearchStack} />
      <Tab.Screen name={t("profile")} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
