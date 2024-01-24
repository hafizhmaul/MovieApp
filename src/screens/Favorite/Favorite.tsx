import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {VerticalCard} from '../../components/Atoms';
import {RootState} from '../../store/reducer/reducer';
import {MovieDetailProps} from '../MovieDetail/MovieDetail.type';
import {styles} from './Favorite.styles';

const Favorite = ({navigation}: any) => {
  const {listFavorited} = useSelector((state: RootState) => state.movie);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.containerFavorite}>
      {listFavorited?.length > 0 ? (
        <View style={styles.contentFavorite}>
          {listFavorited?.map((item: MovieDetailProps, index: number) => (
            <VerticalCard
              navigation={navigation}
              key={index}
              item={item}
              dataLength={listFavorited?.length - 1}
              index={index}
              conditionalPadding={false}
            />
          ))}
        </View>
      ) : (
        <View style={styles.containerEmptyFavorite}>
          <Text style={styles.emptyFavoriteHeader}>No Favorites Yet!</Text>
          <Text style={styles.emptyFavoriteText}>
            You can add an item to your favorites by clicking 'Heart Icon'.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Favorite;
