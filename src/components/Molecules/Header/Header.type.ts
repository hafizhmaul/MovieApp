export interface HeaderProps {
  data: HeaderDataProps[];
  isRefreshing: boolean;
  navigation: any;
}

export interface HeaderDataProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | any;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
