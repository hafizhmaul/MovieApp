import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentPoster: {
    resizeMode: 'cover',
    width: 120,
    height: 170,
    borderRadius: 10,
    top: -70,
  },
  containerMovieInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  },

  containerInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    paddingRight: 150,
    height: 50,
  },
  containerAdditionalInfo: {
    marginTop: 15,
    gap: 2,
  },
  additionalInfo: {
    fontSize: 12,
    paddingRight: 140,
  },

  containerAverageVote: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    borderRadius: 5,
    padding: 10,
  },
  contentAverageVote: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  averageVote: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  containerVoteInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2,
  },
  voteInfo: {
    fontSize: 10,
  },
  star: {
    left: -9,
    gap: -10,
  },
  containerDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  detailHeader: {
    fontWeight: '600',
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  detailCategory: {
    fontWeight: '600',
    color: '#000',
    width: 70,
  },
  genreHeader: {
    color: '#000',
    marginBottom: 10,
    fontWeight: '600',
  },
  containerGenre: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  genreItem: {
    padding: 10,
    backgroundColor: 'rgba(0,91,150, 0.4)',
    borderRadius: 10,
    color: 'rgba(0,91,150, 0.8)',
    fontWeight: '600',
  },
  containerBookmarkIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 15,
    top: -75,
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export {styles};
