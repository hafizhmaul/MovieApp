import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MovieDetailProps} from '../../../../screens/MovieDetail/MovieDetail.type';
import {RootState} from '../../../../store/reducer/reducer';
import {addFavorite, removeFavorite} from '../../../../store/slice/MovieSlice';
import {MainColor, posterPath} from '../../../../utils/constant';
import {styles} from '../ComponentDetail.styles';

const TitleSection: React.FC<{item: MovieDetailProps | null}> = ({item}) => {
  const dispatch: any = useDispatch();
  const {listFavorited} = useSelector((state: RootState) => state.movie);

  const isFavorited = listFavorited?.some(
    (element: MovieDetailProps) => element.id === item?.id,
  );

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorite(item?.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <View style={styles.containerMovieInfo}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.containerBookmarkIcon}
        onPress={toggleFavorite}>
        <FontAwesomeIcon
          icon={faBookmark}
          size={22}
          color={
            isFavorited ? MainColor.PRIMARY_YELLOW : MainColor.PRIMARY_GRAY
          }
        />
      </TouchableOpacity>
      <Image
        style={styles.contentPoster}
        source={{
          uri: `${posterPath + item?.poster_path}`,
        }}
      />
      <View style={styles.containerInfo}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item?.title}
        </Text>
        <View style={styles.containerAdditionalInfo}>
          {item?.title !== item?.original_title && (
            <Text
              style={styles.additionalInfo}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item?.original_title}
            </Text>
          )}
          <Text style={styles.additionalInfo}>
            {item?.production_countries[0]?.name ?? 'TBA'} •{' '}
            {item?.release_date?.toString().substring(0, 4)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TitleSection;
