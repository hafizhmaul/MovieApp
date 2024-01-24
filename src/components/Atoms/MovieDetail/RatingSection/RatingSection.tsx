import React from 'react';
import {Text, View} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {MovieDetailProps} from '../../../../screens/MovieDetail/MovieDetail.type';
import {MainColor} from '../../../../utils/constant';
import {rateColor} from '../../../../utils/helper';
import {styles} from '../ComponentDetail.styles';

const RatingSection: React.FC<{item: MovieDetailProps | null}> = ({item}) => {
  return (
    <View
      style={[
        styles.containerAverageVote,
        {
          backgroundColor: rateColor(
            Number(item?.vote_average?.toFixed(1)),
            true,
          ),
        },
      ]}>
      <View
        style={[
          styles.contentAverageVote,
          {
            backgroundColor: rateColor(
              Number(item?.vote_average?.toFixed(1)),
              false,
            ),
          },
        ]}>
        <Text style={styles.averageVote}>{item?.vote_average?.toFixed(1)}</Text>
      </View>
      <View style={styles.containerVoteInfo}>
        <View>
          <StarRatingDisplay
            starSize={15}
            color={MainColor.PRIMARY_YELLOW}
            rating={Number(item?.vote_average?.toFixed(1)) / 2}
            style={styles.star}
          />
        </View>
        <Text style={styles.voteInfo}>
          from {item?.vote_count.toLocaleString()} users
        </Text>
      </View>
    </View>
  );
};

export default RatingSection;
