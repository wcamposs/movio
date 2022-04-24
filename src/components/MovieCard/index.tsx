// libraries
import React from "react";

// interfaces
import { MovieCardTypes } from "./Models/types";

// components
import MovieCardView from "./view";

function MovieCard({ navigation, movie }: MovieCardTypes) {
  // consts
  const { poster_path, title, overview, release_date, vote_average } = movie;

  const formattedReleaseDate = new Date(release_date).toLocaleDateString(
    "pt-BR",
    { timeZone: "UTC" }
  );

  const formattedImagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

  // methods
  function handleNavigateToMovieDetails() {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <MovieCardView
      title={title}
      overview={overview}
      vote_average={vote_average}
      formattedImagePath={formattedImagePath}
      formattedReleaseDate={formattedReleaseDate}
      poster_path={poster_path}
      handleNavigateToMovieDetails={handleNavigateToMovieDetails}
    />
  );
}

export default MovieCard;
