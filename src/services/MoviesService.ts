// services
import api from "./api";

// apiKey
import { apiKey } from "../authToken/authToken";

// interfaces
import { DetailedMovieProps } from "../utils/interfaces";

const MoviesService = {
  async loadMovies(
    setLoading: (value: boolean) => void,
    page: number,
    setMovieList: (value: []) => void,
    setShouldRenderEmpty: (value: boolean) => void,
    movieList: []
  ) {
    setLoading(true);

    let newPage = page;
    if (movieList.length) {
      newPage + 1;
    }

    try {
      const { data } = await api.get(
        `/movie/now_playing?api_key=${apiKey}&language=en-US&page=${newPage}`
      );

      if (!data.results) {
        setShouldRenderEmpty(true);
      } else {
        setShouldRenderEmpty(false);
      }

      const dataList = data.results;
      let newDataList: [] = movieList;
      const dataIds: [] = [];

      dataList.map((dataItem: {}) => dataIds.push(dataItem.id));

      const promises = dataIds.map(async (id) => {
        const { data: searchedMovie } = await api.get(
          `/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
        );
        const { data: searchedMovieTrailer } = await api.get(
          `/movie/${id}/videos?api_key=${apiKey}&language=en-US&page=1`
        );

        const newSearchedMovie: DetailedMovieProps = {
          ...searchedMovie,
          trailer: searchedMovieTrailer.results[0] || {},
        };

        newDataList.push(newSearchedMovie);
      });

      await Promise.all(promises);

      setMovieList(newDataList);
    } catch (error) {
      setMovieList([]);
      setShouldRenderEmpty(true);
    }
    setLoading(false);
  },

  async loadSearchedMovies(
    setLoading: (value: boolean) => void,
    searchParams: string,
    setMovieList: (value: []) => void,
    setShouldRenderEmpty: (value: boolean) => void
  ) {
    setLoading(true);

    try {
      const { data } = await api.get(
        `/search/movie?api_key=${apiKey}&query=${searchParams}&language=en-US`
      );

      if (!data.results) {
        setShouldRenderEmpty(true);
      } else {
        setShouldRenderEmpty(false);
      }

      const dataList = data.results;
      let newDataList: [] = [];
      const dataIds: [] = [];

      dataList.map((dataItem: {}) => dataIds.push(dataItem.id));

      const promises = dataIds.map(async (id) => {
        const { data: searchedMovie } = await api.get(
          `/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
        );
        const { data: searchedMovieTrailer } = await api.get(
          `/movie/${id}/videos?api_key=${apiKey}&language=en-US&page=1`
        );

        const newSearchedMovie: DetailedMovieProps = {
          ...searchedMovie,
          trailer: searchedMovieTrailer.results[0] || {},
        };

        newDataList.push(newSearchedMovie);
      });

      await Promise.all(promises);

      setMovieList(newDataList);
    } catch (error) {
      setMovieList([]);
      setShouldRenderEmpty(true);
    }
    setLoading(false);
  },
};

export default MoviesService;
