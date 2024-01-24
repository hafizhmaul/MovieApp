import {StyleSheet} from 'react-native';
import {MainColor} from '../../utils/constant';

const styles = StyleSheet.create({
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
  },
  contentHome: {
    marginBottom: 30,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 15,
  },
  textSearch: {
    paddingLeft: 10,
    color: MainColor.PRIMARY_GRAY,
  },
});

export {styles};
