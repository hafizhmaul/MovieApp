import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {posterPath} from '../../../../utils/constant';
import {paddingForCard} from '../../../../utils/helper';
import {CardProps} from '../../../Molecules/CardList/CardList.type';
import {styles} from './VerticalCard.styles';

const VerticalCard: React.FC<CardProps> = ({
  item,
  index,
  dataLength,
  conditionalPadding = true,
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('MovieDetail', {id: item?.id});
      }}>
      <Image
        source={{
          uri: `${posterPath + item?.poster_path}`,
        }}
        style={[
          styles.imgPoster,
          conditionalPadding && paddingForCard(index, dataLength, 'Vertical'),
        ]}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          styles.titleMovie,
          conditionalPadding && paddingForCard(index, dataLength, 'Vertical'),
        ]}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default VerticalCard;
