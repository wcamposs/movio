import { NavigationScreenProp } from "react-navigation";

export interface MovieDetailsTypes {
  navigation: NavigationScreenProp;
  route: any;
}

export interface MovieDetailsViewTypes {
  navigation: NavigationScreenProp;
  title: string;
  formattedReleaseDate: string;
  formattedImagePath: string;
  overview: string;
  vote_average: string;
  genres: Array<{}>;
  status: string;
  runtime: string;
  productionCompanies: Array<{}>;
  trailer: {
    id?: string;
    iso_3166_1?: string;
    iso_639_1?: string;
    key: string;
    name?: string;
    official?: boolean;
    published_at?: string;
    site: string;
    size?: number;
    type?: string;
  };
  windowWidth: string;
  playing: boolean;
  onStateChange: () => void;
}
