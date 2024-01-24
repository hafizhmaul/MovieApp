import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/helper';

const styles = StyleSheet.create({
  containerGenreCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreCard: {
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: windowWidth / 2 - 10,
  },
  genreName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});

export {styles};
