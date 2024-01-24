import {StyleSheet} from 'react-native';
import {MainColor} from '../../../utils/constant';
import {windowWidth} from '../../../utils/helper';

const styles = StyleSheet.create({
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTextInput: {
    paddingHorizontal: 10,
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginLeft: 15,
    width: windowWidth - 75,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // width: '100%',
    // textAlign: 'center',
  },
  contentTextInput: {
    paddingLeft: 35,
    color: MainColor.PRIMARY_BLUE,
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
});

export {styles};
