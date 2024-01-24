import {StyleSheet} from 'react-native';
import {MainColor} from '../../../utils/constant';

const styles = StyleSheet.create({
  containerHeaderTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  viewAll: {
    color: MainColor.PRIMARY_BLUE,
    fontSize: 12,
    fontWeight: '500',
  },
});

export {styles};
