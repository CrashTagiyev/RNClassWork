import {View, TouchableOpacity, Text} from 'react-native';
import HomeActive from '@assets/homeActive.svg';
import HomeInactive from '@assets/homeInActive.svg';
import ProfileActive from '@assets/userActive.svg';
import ProfileInActive from '@assets/userInActive.svg';
import Search from '@assets/tabIcons/searchActive';
import SearchInActive from '@assets/tabIcons/searchInActive';

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
        } else if (label === 'Search') {
          icon = isFocused ? <Search /> : <SearchInActive />;
        }else if (label === 'profile') {
          icon = isFocused ? <ProfileActive /> : <ProfileInActive />;
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
