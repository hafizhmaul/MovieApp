import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 14,
    left: 10,
    zIndex: 1,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBackdrop: {
    height: 230,
  },
  imageBackdrop: {
    width: '100%',
    height: 240,
  },
  containerMovieDetail: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentDetail: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '100%',
    top: -25,
    padding: 15,
  },
  containerOverview: {
    top: -50,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

export {styles};
