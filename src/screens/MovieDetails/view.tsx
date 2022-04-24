// libraries
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

// interfaces
import { MovieDetailsViewTypes } from "./Models/types";

// ts
import colors from "../../utils/colors";
import styles from "./styles";

// components
import Chip from "../../components/Chip";
import Header from "../../components/Header";
import CompanyItem from "../../components/CompanyItem";

function MovieDetailsView({
  navigation,
  title,
  formattedReleaseDate,
  formattedImagePath,
  overview,
  vote_average,
  genres,
  status,
  runtime,
  productionCompanies,
  trailer,
  windowWidth,
  playing,
  onStateChange,
}: MovieDetailsViewTypes) {
  // renders
  function renderVideoContainer() {
    if (!trailer?.key || trailer.site !== "YouTube") {
      return (
        <Image
          source={{ uri: formattedImagePath }}
          style={styles.image}
          resizeMode="cover"
        />
      );
    }
    return (
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={220}
          width={windowWidth}
          play={playing}
          videoId={trailer.key}
          onChangeState={onStateChange}
        />
      </View>
    );
  }

  function renderOverview() {
    if (!overview) {
      return null;
    }

    return (
      <View style={styles.overviewContainer}>
        <View style={styles.overviewRow}>
          <View style={styles.itemRow}>
            <Text style={styles.overviewText}>Overview</Text>
          </View>
          <View style={styles.itemRow}>
            <FontAwesome name="star" size={20} color={colors.yellow} />
            <Text style={styles.voteAverage}>{vote_average}</Text>
          </View>
        </View>
        <View style={styles.overviewTextContainer}>
          <Text style={styles.overviewFullText}>{overview}</Text>
        </View>
      </View>
    );
  }

  function renderGenres() {
    if (!genres.length) {
      return null;
    }

    return (
      <View style={styles.genresContainer}>
        <View style={styles.genresTitleRow}>
          <Text style={styles.genresTitle}>Genres</Text>
        </View>
        <View style={styles.genresRow}>
          {genres.map((genre: any) => (
            <View style={styles.chipContainer} key={genre.id}>
              <Chip
                name={genre.name}
                nameColor={colors.white}
                backgroundColor={colors.blue}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }

  function renderMoreInfo() {
    return (
      <View style={styles.moreInfoContainer}>
        <View style={styles.moreInfoTitleRow}>
          <Text style={styles.moreInfoTitle}>More Info</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <View style={styles.singleRow}>
              <View style={styles.singleRow}>
                <Text style={styles.generalInfoTitle}>Release date:</Text>
                <Text style={styles.generalInfoValue}>
                  {formattedReleaseDate}
                </Text>
              </View>
              <View></View>
            </View>
            <View style={styles.singleRow}>
              <View style={styles.singleRow}>
                <Text style={styles.generalInfoTitle}>Duration:</Text>
                <Text style={styles.generalInfoValue}>{`${runtime} min`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.singleRow}>
              <Text style={styles.generalInfoTitle}>Release status:</Text>
              <Text style={styles.generalInfoValue}>{status}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderProductionCompanyItem({ item }: any) {
    return <CompanyItem companyItem={item} />;
  }

  function renderProducedBy() {
    if (!productionCompanies.length) {
      return null;
    }

    return (
      <View style={styles.producedByContainer}>
        <View style={styles.producedByTitleRow}>
          <Text style={styles.producedByTitle}>Produced By</Text>
        </View>
        <FlatList
          style={styles.producedContainer}
          data={productionCompanies}
          renderItem={renderProductionCompanyItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator
          horizontal
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Details" showBackButton textColor={colors.blue} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.movieContainer}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {renderVideoContainer()}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {renderOverview()}
        {renderGenres()}
        {renderMoreInfo()}
        {renderProducedBy()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MovieDetailsView;
