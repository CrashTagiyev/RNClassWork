import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SearchIcon from '@assets/tabIcons/searchInActive.svg';
import ClearInputIcon from '@assets/clearInput.svg';
import {useState, createRef, useEffect} from 'react';
import SearchedContent from './components/SearchedContent.jsx';
import DelayInput from 'react-native-debounce-input';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedText, setDebouncedText] = useState(''); 

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText); 
    }, 500);

    return () => {
      clearTimeout(handler); 
    };
  }, [searchText]);

  const handleClear = () => {
    setSearchText('');
    setDebouncedText('');
  };



  return (
    <ScrollView contentContainerClassName=" flex-1 pt-[30px] px-[10px] flex-column bg-[#141115]">
      <View>
        <TextInput
          value={searchText}
          autoFocus={true}
          onChangeText={text => setSearchText(text)}
          style={{
            color: 'white',
            height: 40,
            backgroundColor: '#353236',
            borderRadius: 5,
            paddingLeft: 40,
          }}
          placeholderTextColor={`#827F83`}
          placeholder="Search for Shows,Movies or Actors"
        />
        <View className="absolute top-[9] left-2">
          <SearchIcon />
        </View>
        <TouchableOpacity
          onPress={handleClear}
          className="absolute top-[9] right-2">
          <ClearInputIcon />
        </TouchableOpacity>
      </View>
      <View className="mt-5 flex-column gap-10">
        <SearchedContent searchedTerm={searchText} type={`tv`} />
        <SearchedContent searchedTerm={searchText} type={`movie`} />
        <SearchedContent searchedTerm={searchText} type={`person`} />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
