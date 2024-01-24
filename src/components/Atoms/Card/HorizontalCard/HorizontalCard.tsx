import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {MainColor, posterPath} from '../../../../utils/constant';
import {getGenresByIds, paddingForCard} from '../../../../utils/helper';
import {CardProps} from '../../../Molecules/CardList/CardList.type';
import {styles} from './HorizontalCard.styles';

const HorizontalCard = memo<CardProps>(
  ({item, index, dataLength, conditionalPadding = true, navigation}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('MovieDetail', {id: item?.id});
        }}>
        <View
          style={[
            styles.containerCard,
            conditionalPadding &&
              paddingForCard(index, dataLength, 'Horizontal'),
          ]}>
          <Image
            source={{uri: `${posterPath + item?.poster_path}`}}
            style={styles.posterImg}
          />
          <View style={styles.containerInfo}>
            <View style={styles.titleAndGenre}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {item?.title}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.genre}>
                {getGenresByIds(item?.genre_ids)[0]}
              </Text>
            </View>
            <View style={styles.rating}>
              <StarRatingDisplay
                rating={Number(item?.vote_average?.toFixed(1)) / 2}
                starSize={14}
                style={styles.starStyle}
                color={MainColor.PRIMARY_YELLOW}
              />
              <Text style={styles.ratingNumber}>
                {Number(item?.vote_average?.toFixed(1))}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default HorizontalCard;
