import debounce from 'lodash.debounce';
import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalCard from '../../components/Atoms/Card/HorizontalCard/HorizontalCard';
import LoadingIndicator from '../../components/Atoms/LoadingIndicator/LoadingIndicator';
import SearchInput from '../../components/Atoms/SearchInput/SearchInput';
import {RootState} from '../../store/reducer/reducer';
import {clearData} from '../../store/slice/MovieSlice';
import {findMovie} from '../../store/thunk/thunk';
import {styles} from './Explore.styles';

const Explore = ({navigation}: any) => {
  const dispatch: any = useDispatch();

  const {isLoadingMovie, searchResults} = useSelector(
    (state: RootState) => state.movie,
  );

  const [query, setQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(text => {
        setQuery(text);

        if (searchResults.length !== 0) {
          setPage(1);
          dispatch(clearData());
        }
      }, 500),
    [dispatch, searchResults.length],
  );

  const handleLoadMore = () => {
    if (!isLoadingMovie && page < totalPages && searchResults.length !== 0) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(findMovie({query, page, setTotalPages}));
  }, [dispatch, query, page]);

  return (
    <View style={styles.containerExplore}>
      <SearchInput
        value={query}
        onChangeText={debouncedChangeHandler}
        navigation={navigation}
      />
      <Text>Search Result {`(${searchResults.length})`}</Text>
      <FlatList
        data={searchResults}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        renderItem={({item, index}: any) => (
          <HorizontalCard
            item={item}
            index={index}
            dataLength={searchResults?.length}
            navigation={navigation}
          />
        )}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={handleLoadMore}>
            <LoadingIndicator isLoading={isLoadingMovie} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Explore;
