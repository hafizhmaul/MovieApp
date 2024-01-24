import React, {useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Carousel from 'react-native-snap-carousel-latest';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {MainColor, posterPath} from '../../../utils/constant';
import {getGenresByIds, windowWidth} from '../../../utils/helper';
import {styles} from './Header.styles';
import {HeaderProps} from './Header.type';

const Header: React.FC<HeaderProps> = React.memo(
  ({data, isRefreshing, navigation}) => {
    const headerDataRef = useRef<any>(null);

    const renderItem = ({item}: any) => {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('MovieDetail', {id: item?.id});
          }}>
          <ImageBackground
            style={styles.headerImg}
            borderRadius={5}
            source={{
              uri: `${posterPath + (item?.backdrop_path ?? item?.poster_path)}`,
            }}
            resizeMode="cover">
            <LinearGradient
              style={styles.headerGradient}
              colors={['transparent', '#252525cc']}
            />
            <View style={styles.containerTitle}>
              <Text
                style={styles.textTitle}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
              </Text>
              <View style={styles.containerStar}>
                <StarRatingDisplay
                  rating={Number(item?.vote_average?.toFixed(1)) / 2}
                  starSize={18}
                  style={styles.starStyle}
                  color={MainColor.PRIMARY_YELLOW}
                />
                <Text style={styles.ratingNumber}>
                  {Number(item?.vote_average?.toFixed(1))}
                </Text>
              </View>
              <Text style={styles.genreList}>
                {getGenresByIds(item.genre_ids).join(', ')}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.containerHeaderImg}>
        {isRefreshing ? (
          <SkeletonPlaceholder
            highlightColor="#fff"
            backgroundColor={MainColor.SECONDARY_GRAY}
            borderRadius={4}>
            <SkeletonPlaceholder.Item
              width={windowWidth - 50}
              height={200}
              borderRadius={5}
            />
          </SkeletonPlaceholder>
        ) : (
          <Carousel
            ref={headerDataRef}
            data={data}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 50}
            layout={'default'}
            loop={true}
          />
        )}
      </View>
    );
  },
);

export default Header;
