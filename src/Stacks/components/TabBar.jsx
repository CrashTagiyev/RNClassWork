import {View, TouchableOpacity, Text} from 'react-native';
import HomeActive from '../../../assets/homeActive.svg';
import HomeInactive from '../../../assets/homeInActive.svg';
import ProfilActive from '../../../assets/userActive.svg';
import ProfilInactive from '../../../assets/userInActive';
import NewAndHot from '../../../assets/newAndHot';
import NewAndHotInActive from '../../../assets/newAndHotInActive';
import DownloadActive from '../../../assets/downloadActive';
import DownloadInActive from '../../../assets/downloadInActive';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      className={` flex-row bg-[#211E22] justify-between items-center px-[30px] py-3`}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        let icon;

        if (label === 'Home') {
          icon = isFocused ? <HomeActive /> : <HomeInactive />;
        } else if (label === 'New & Hot') {
          icon = isFocused ? <NewAndHot /> : <NewAndHotInActive />;
        }else if (label === 'Downloads') {
          icon = isFocused ? <DownloadActive /> : <DownloadInActive />;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          // Handle default navigation to the selected tab if not focused
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className="items-center"
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View className="size-[25px]">{icon}</View>
            <Text
              className={`text-center ${
                isFocused ? 'text-white' : 'text-[#838383]'
              } text-sm mt-1`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
