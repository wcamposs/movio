// libraries
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions } from "react-native";

// interfaces
import { MovieDetailsTypes } from "./Models/types";

// components
import MovieDetailsView from "./view";

function MovieDetails({ navigation, route }: MovieDetailsTypes) {
  const { movie } = route.params;
  const {
    genres = [],
    overview,
    poster_path,
    production_companies = [],
    release_date,
    runtime,
    status,
    vote_average,
    title,
    trailer,
  } = movie;

  const formattedReleaseDate = new Date(release_date).toLocaleDateString(
    "pt-BR",
    { timeZone: "UTC" }
  );
  const formattedImagePath = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg";

  const windowWidth = Dimensions.get("window").width;

  // states
  const [playing, setPlaying] = useState(false);

  // effects
  useEffect(() => {
    // added just for mount/unmount purposes
  }, []);

  // methods
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <MovieDetailsView
      navigation={navigation}
      title={title}
      formattedReleaseDate={formattedReleaseDate}
      formattedImagePath={formattedImagePath}
      vote_average={vote_average}
      overview={overview}
      genres={genres}
      status={status}
      runtime={runtime}
      productionCompanies={production_companies}
      trailer={trailer}
      windowWidth={windowWidth}
      playing={playing}
      onStateChange={onStateChange}
    />
  );
}

export default MovieDetails;
