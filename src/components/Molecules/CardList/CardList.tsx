import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {HeaderTitle, VerticalCard} from '../../Atoms';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import {styles} from './CardList.styles';
import {CardListProps} from './CardList.type';

const CardList: React.FC<CardListProps> = React.memo(
  ({title, data, isLoading, navigation}) => {
    const flatListRef = React.useRef<any>(null);

    return (
      <View>
        <HeaderTitle navigation={navigation} title={title ?? ''} />
        {isLoading ? (
          <ScrollView>
            <SkeletonLoading />
          </ScrollView>
        ) : (
          <FlatList
            ref={flatListRef}
            contentContainerStyle={styles.containerVerticalCardList}
            ItemSeparatorComponent={() => (
              <View style={styles.gapCardVertical} />
            )}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <VerticalCard
                navigation={navigation}
                item={item}
                index={index}
                dataLength={data.length - 1}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </View>
    );
  },
);

export default CardList;
