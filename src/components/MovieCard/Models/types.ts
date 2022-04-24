import { NavigationScreenProp } from "react-navigation";

export interface MovieCardTypes {
  navigation: NavigationScreenProp;
  movie: any;
}

export interface MovieCardViewTypes {
  title: string;
  overview: string;
  vote_average: string;
  formattedImagePath: string;
  formattedReleaseDate: string;
  poster_path: string;
  handleNavigateToMovieDetails: () => void;
}
