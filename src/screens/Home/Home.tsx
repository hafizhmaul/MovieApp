import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../../components/Molecules/CardList/CardList';
import Header from '../../components/Molecules/Header/Header';
import {RootState} from '../../store/reducer/reducer';
import {getAllMovies} from '../../store/thunk/thunk';

import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MainColor} from '../../utils/constant';
import {shuffleArray} from '../../utils/helper';
import {styles} from './Home.styles';

const Home = ({navigation}: any) => {
  const dispatch: any = useDispatch();

  const {homepageData, loadingHomepageData} = useSelector(
    (state: RootState) => state.home,
  );

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(getAllMovies(1));
      setRefreshing(false);
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllMovies(1));
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* TODO: SEARCH BAR */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Explore');
        }}>
        <View style={styles.searchBar}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={MainColor.PRIMARY_BLUE}
          />
          <Text style={styles.textSearch}>Search for a movie</Text>
        </View>
      </TouchableOpacity>
      <Header
        data={shuffleArray(homepageData.popular)}
        isRefreshing={loadingHomepageData}
        navigation={navigation}
      />
      <View style={styles.containerHome}>
        <View style={styles.contentHome}>
          <CardList
            navigation={navigation}
            isLoading={loadingHomepageData}
            data={homepageData.nowPlaying}
            title="Recommended For You"
          />
        </View>
        <View style={styles.contentHome}>
          <CardList
            navigation={navigation}
            isLoading={loadingHomepageData}
            data={homepageData.upcoming}
            title="Upcoming"
          />
        </View>
        <View style={styles.contentHome}>
          <CardList
            navigation={navigation}
            isLoading={loadingHomepageData}
            data={homepageData.topRated}
            title="Top Rated"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
