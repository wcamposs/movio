// libraries
import React, { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";

// interfaces
import { MovieListTypes } from "./Models/types";

// services
import MoviesService from "../../services/MoviesService";

// components
import EmptyList from "../../components/EmptyList";
import MovieListView from "./view";

function MovieList({ navigation }: MovieListTypes) {
  // states
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  const [loading, setLoading] = useState(false);
  const [shouldRenderEmpty, setShouldRenderEmpty] = useState(false);

  const [page, setPage] = useState(1);

  // refs
  const typingTimeout = useRef(0);

  // effects
  useEffect(() => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = window.setTimeout(() => loadMovies(), 750);
  }, [searchParams]);

  // methods
  async function loadMovies() {
    if (searchParams.length) {
      setMovieList([]);

      MoviesService.loadSearchedMovies(
        setLoading,
        searchParams,
        setMovieList,
        setShouldRenderEmpty
      );
    } else {
      MoviesService.loadMovies(
        setLoading,
        page,
        setMovieList,
        setShouldRenderEmpty,
        movieList
      );
    }
  }

  function loadMoreMovies() {
    let newPage = page;
    if (!searchParams.length) {
      if (movieList.length) {
        newPage = page + 1;
      }

      MoviesService.loadMovies(
        setLoading,
        newPage,
        setMovieList,
        setShouldRenderEmpty,
        movieList
      );
    }

    setPage(newPage);
  }

  function onBlur() {
    Keyboard.dismiss();
  }

  function onChangeText(text: string = "") {
    if (!text.length) {
      setMovieList([]);
      setPage(1);
    }
    setSearchParams(text);
  }

  return (
    <MovieListView
      navigation={navigation}
      movieList={movieList}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={searchParams}
      loading={loading}
      shouldRenderEmpty={shouldRenderEmpty}
      loadMoreMovies={loadMoreMovies}
    />
  );
}

export default MovieList;
