import {StyleSheet} from 'react-native';
import {MainColor} from '../../../../utils/constant';
import {windowWidth} from '../../../../utils/helper';

const styles = StyleSheet.create({
  containerCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
    padding: 15,
    gap: 20,
    paddingRight: 50,
  },
  posterImg: {
    resizeMode: 'cover',
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  containerInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth - 90,
    justifyContent: 'space-between',
    paddingVertical: 15,
    height: 130,
  },
  info: {
    fontSize: 12,
  },
  titleAndGenre: {
    gap: 5,
  },
  title: {
    color: '#000',
    fontWeight: '600',
    width: '70%',
  },
  genre: {
    color: MainColor.PRIMARY_GRAY,
  },
  starStyle: {
    gap: -8,
    marginLeft: -5,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingNumber: {
    backgroundColor: MainColor.PRIMARY_YELLOW,
    paddingHorizontal: 3,
    paddingVertical: 1,
    fontWeight: '800',
    fontSize: 12,
    borderRadius: 2,
    color: '#000',
  },
});

export {styles};
