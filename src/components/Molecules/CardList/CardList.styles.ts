import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerVerticalCardList: {
    // paddingHorizontal: 15,
  },
  containerHorizontalCardList: {
    paddingHorizontal: 15,
    paddingBottom: 60,
  },
  gapCardVertical: {
    width: 12,
  },
  gapCardHorizontal: {
    height: 5,
  },
  loadingVerticalCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMoviesNotFound: {
    marginTop: 30,
    alignItems: 'center',
    gap: 10,
  },
  moviesNotFoundText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export {styles};
