import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VerticalCard} from '../../components/Atoms';
import {
  MoviesWithSelectedGenre,
  NowPlayingMovieApi,
  PopularMovieApi,
  TopRatedMovieApi,
  UpcomingMovieApi,
} from '../../store/api/api';
import {RootState} from '../../store/reducer/reducer';
import {
  clearAllDataByCategory,
  getAllDataByCategory,
} from '../../store/slice/HomeSlice';

import {clearData, getAllMoviesByGenre} from '../../store/slice/MovieSlice';
import {MainColor} from '../../utils/constant';
import {styles} from './ViewAll.styles';

const gap = 12;

const ViewAll = ({navigation, route}: any) => {
  const {viewAllData} = useSelector((state: RootState) => state.home);
  const {moviesByGenre, isLoadingMovie} = useSelector(
    (state: RootState) => state.movie,
  );
  const dispatch: any = useDispatch();
  const {title, id} = route.params;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleNextPage = () => {
    if (!isLoadingMovie && page < totalPages) {
      setIsLoading(true);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(clearAllDataByCategory());
    dispatch(clearData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getViewAllByType = useCallback(
    (pageTitle: string, pageNumber: number) => {
      switch (pageTitle) {
        case 'Recommended For You':
          return NowPlayingMovieApi(pageNumber)
            .then((res: any) => {
              setIsLoading(false);
              setTotalPages(res?.data?.total_pages);
              dispatch(getAllDataByCategory(res?.data?.results));
            })
            .catch(err => console.log(err));
        case 'Top Rated':
          return TopRatedMovieApi(pageNumber)
            .then((res: any) => {
              setIsLoading(false);
              setTotalPages(res?.data?.total_pages);
              dispatch(getAllDataByCategory(res?.data?.results));
            })
            .catch(err => console.log(err));
        case 'Upcoming':
          return UpcomingMovieApi(pageNumber)
            .then((res: any) => {
              setIsLoading(false);
              setTotalPages(res?.data?.total_pages);
              dispatch(getAllDataByCategory(res?.data?.results));
            })
            .catch(err => console.log(err));
        case 'Popular':
          return PopularMovieApi(pageNumber)
            .then((res: any) => {
              setIsLoading(false);
              setTotalPages(res?.data?.total_pages);
              dispatch(getAllDataByCategory(res?.data?.results));
            })
            .catch(err => console.log(err));
        default:
          return;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (title !== 'Genres') {
      getViewAllByType(title, page);
    } else {
      MoviesWithSelectedGenre(id, page).then((res: any) => {
        setIsLoading(false);
        setTotalPages(res.data.total_pages);
        dispatch(getAllMoviesByGenre(res?.data?.results));
      });
    }
  }, [dispatch, getViewAllByType, id, page, title]);

  console.log('page:', page, 'length:', moviesByGenre.length);

  return (
    <FlatList
      contentContainerStyle={styles.containerViewAll}
      numColumns={3}
      data={title !== 'Genres' ? viewAllData : moviesByGenre}
      columnWrapperStyle={{gap}}
      showsVerticalScrollIndicator={false}
      onEndReached={handleNextPage}
      ItemSeparatorComponent={() => <View style={styles.itemSeparatorCard} />}
      onEndReachedThreshold={0.5}
      renderItem={({item, index}) => (
        <VerticalCard
          navigation={navigation}
          item={item}
          index={index}
          dataLength={viewAllData.length - 1}
          conditionalPadding={false}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={() => {
        return isLoading ? (
          <View style={{marginVertical: 10}}>
            <ActivityIndicator size="large" color={MainColor.PRIMARY_GRAY} />
          </View>
        ) : null;
      }}
      ListEmptyComponent={
        !isLoading ? (
          <View>
            <Text>Movies not found</Text>
          </View>
        ) : null
      }
    />
  );
};

export default ViewAll;
