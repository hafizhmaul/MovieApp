import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import stc from 'string-to-color';
import {assignTitle} from '../../store/slice/HomeSlice';
import {genreMap} from '../../utils/helper';
import {styles} from './GenreList.style';

const GenreList = ({navigation}: any) => {
  const dispatch: any = useDispatch();

  const mappedGenres: {id: number; name: string}[] = Object.entries(
    genreMap,
  ).map(([id, name]) => ({
    id: parseInt(id, 10),
    name: name as string,
  }));

  return (
    <ScrollView
      contentContainerStyle={styles.containerGenreCard}
      showsVerticalScrollIndicator={false}>
      {mappedGenres.map(item => (
        <TouchableOpacity
          onPress={() => {
            dispatch(assignTitle(item.name));
            navigation.navigate('ViewAll', {title: 'Genres', id: item?.id});
          }}
          activeOpacity={1}
          key={item.id}
          style={[styles.genreCard, {backgroundColor: stc(item.name)}]}>
          <Text style={styles.genreName}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default GenreList;
