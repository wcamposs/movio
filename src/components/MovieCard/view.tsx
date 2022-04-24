// libraries
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Fontisto } from "@expo/vector-icons";

// ts
import styles from "./styles";
import colors from "../../utils/colors";

// interfaces
import { MovieCardViewTypes } from "./Models/types";

function MovieCardView({
  title,
  overview,
  vote_average,
  formattedImagePath,
  formattedReleaseDate,
  poster_path,
  handleNavigateToMovieDetails,
}: MovieCardViewTypes) {
  // renders
  function renderMovieOverview() {
    return (
      <View style={styles.movieOverViewContainer}>
        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.overview}>
          {overview}
        </Text>
      </View>
    );
  }

  function renderMovieImage() {
    if (!poster_path) {
      return (
        <View style={styles.imageContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="image" size={48} color="black" />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: formattedImagePath }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  function renderMovieInfo() {
    return (
      <View style={styles.movieInfoContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.secondaryRow}>
          <View style={styles.averageRateRow}>
            <FontAwesome name="star" size={20} color={colors.yellow} />
            <Text style={styles.voteAverageText}>{vote_average}</Text>
          </View>

          <View style={styles.releaseDateRow}>
            <Fontisto name="date" size={20} color={colors.black} />
            <Text style={styles.voteAverageText}>{formattedReleaseDate}</Text>
          </View>
        </View>
        {renderMovieOverview()}
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigateToMovieDetails}
    >
      <View style={styles.containerRow}>
        {renderMovieImage()}
        <View style={styles.infoContainer}>{renderMovieInfo()}</View>
      </View>
    </TouchableOpacity>
  );
}

export default MovieCardView;
