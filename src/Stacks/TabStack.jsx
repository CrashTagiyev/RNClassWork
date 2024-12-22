import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import HomeStack from './HomeStack';
import NewAndHotStack from './NewAndHotStack';
import DownloadsStack from './DownloadsStack';
import { useTranslation } from 'react-i18next';

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
      <Tab.Screen name={t("newAndHot")} component={NewAndHotStack} />
      <Tab.Screen name={t("downloads")} component={DownloadsStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
