import {View, Text, FlatList, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import {NETFLIX_API_URI} from '@src/Utils/Uris';
import {useMMKVString} from 'react-native-mmkv';
import SearchContentCart from './SearchContentCart';

const SearchedContent = ({searchedTerm, type}) => {
  const [searchedContents, setSearchedContents] = useState([]);
  const contentUrl = `${NETFLIX_API_URI}/search/${type}/${searchedTerm}`;
  const [accessToken, setAccessToken] = useMMKVString('accessToken');
  const getSearchedContents = async () => {
    const response = await fetch(contentUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    setSearchedContents(data.content);
  };

  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      getSearchedContents();
      setDebouncedText(searchedTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchedTerm]);

  if (!searchedTerm) {
    return (
      <View>
        <Text className="text-white"></Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView>
        {searchedContents && (
          <Text className="text-white text-start text-2xl">
            {type === 'tv'
              ? 'Tv shows'
              : type === 'movie'
              ? 'Movies'
              : 'People'}
          </Text>
        )}
        <FlatList
          horizontal
          data={searchedContents}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={({item, index}) => (
            <SearchContentCart
              isInAnotherStack={true}
              item={item}
              type={type}
            />
          )}
        />
      </ScrollView>
    </>
  );
};

export default SearchedContent;
