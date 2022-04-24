import { NavigationScreenProp } from "react-navigation";

export interface MovieListTypes {
  navigation: NavigationScreenProp;
}

export interface MovieListViewTypes {
  navigation: NavigationScreenProp;
  movieList: Array<{}>;
  shouldRenderEmpty: boolean;
  onChangeText: () => void;
  onBlur: () => void;
  value: string;
  loading: boolean;
  loadMoreMovies: () => void;
}
