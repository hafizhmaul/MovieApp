import {StyleSheet} from 'react-native';
import {MainColor} from '../../utils/constant';

const styles = StyleSheet.create({
  containerFavorite: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  contentFavorite: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  },
  containerEmptyFavorite: {
    gap: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  emptyFavoriteHeader: {
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
  },
  emptyFavoriteText: {
    color: MainColor.PRIMARY_GRAY,
    paddingHorizontal: 30,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export {styles};
