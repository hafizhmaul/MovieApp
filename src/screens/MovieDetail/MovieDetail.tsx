import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';

import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {
  DetailSection,
  RatingSection,
  TitleSection,
} from '../../components/Atoms/MovieDetail';
import {RootState} from '../../store/reducer/reducer';
import {getMovieDetail} from '../../store/thunk/thunk';
import {posterPath} from '../../utils/constant';
import {styles} from './MovieDetail.styles';

const MovieDetail = ({route, navigation}: any) => {
  const {movieInfo} = useSelector((state: RootState) => state.movie);
  const {id} = route.params;
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetail({id}));
    }
  }, [dispatch, id]);

  return (
    <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faChevronLeft} size={15} color="#fff" />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.containerBackdrop}>
          <Image
            source={{
              uri: `${posterPath + movieInfo?.backdrop_path}`,
            }}
            style={styles.imageBackdrop}
          />
        </View>
        {/* Title Section */}
        <View style={styles.containerMovieDetail}>
          <View style={styles.contentDetail}>
            <TitleSection item={movieInfo} />

            <View style={styles.containerOverview}>
              {/* Rating Section */}
              <RatingSection item={movieInfo} />
              {/* Detail Section */}
              <DetailSection item={movieInfo} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
