import {StyleSheet} from 'react-native';
import {MainColor} from '../../../utils/constant';
import {windowWidth} from '../../../utils/helper';

const styles = StyleSheet.create({
  containerHeaderImg: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },

  headerImg: {
    width: '100%',
    height: 200,
  },
  containerTitle: {
    top: -90,
    left: 20,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  textTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
    zIndex: 2,
  },
  containerStar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: -5,
    top: 5,
  },
  starStyle: {
    gap: -8,
  },
  ratingNumber: {
    backgroundColor: MainColor.PRIMARY_YELLOW,
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 5,
  },
  headerGradient: {
    height: 200,
    width: windowWidth - 50,
    borderRadius: 5,
  },
  genreList: {
    top: 10,
    color: '#fff',
    fontSize: 12,
  },
});

export {styles};
