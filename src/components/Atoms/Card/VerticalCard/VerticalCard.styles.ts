import {StyleSheet} from 'react-native';
import {MainColor} from '../../../../utils/constant';

const styles = StyleSheet.create({
  imgPoster: {
    resizeMode: 'cover',
    width: 119.5,
    height: 180,
    borderRadius: 10,
  },
  firstIndex: {
    marginLeft: 15,
  },
  lastIndex: {
    marginRight: 15,
  },
  titleMovie: {
    width: 119.5,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    color: MainColor.PRIMARY_BLACK,
  },
});

export {styles};
