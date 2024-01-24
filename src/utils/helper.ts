import {Dimensions} from 'react-native';

export const paddingForCard = (
  index: number,
  dataLength: number,
  orientation: 'Vertical' | 'Horizontal',
) => {
  if (index === 0) {
    return orientation === 'Vertical' ? {marginLeft: 15} : {marginTop: 30};
  } else if (index === dataLength) {
    return orientation === 'Vertical' ? {marginRight: 15} : {marginBottom: 30};
  } else {
    return;
  }
};

export const rateColor = (rate: number, isBg: boolean) => {
  const rateNumber = rate * 10;
  if (rateNumber < 40) {
    return isBg ? 'rgba(219,35,96,0.2)' : 'rgba(219,35,96,1.0)';
  } else if (rateNumber >= 40 && rateNumber < 70) {
    return isBg ? 'rgba(210, 213, 49, 0.2)' : 'rgba(210,213,49,1.0)';
  } else if (rateNumber >= 70) {
    return isBg ? 'rgba(33,208,122,0.2)' : 'rgba(33,208,122,1.0)';
  }
};

export const shuffleArray = (array: any[]) => {
  const copyArray = array.slice();
  return copyArray.sort(() => Math.random() - 0.5).slice(0, 10);
};

export const windowWidth = Dimensions.get('window').width;

export const genreMap: any = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
  10759: 'Action & Adventure',
  10762: 'Kids',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics',
};

export const getGenresByIds = (ids: any) => {
  return ids.map((id: any) => genreMap[id] || 'Unknown');
};

export const formattedDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
