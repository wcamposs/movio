// libraries
import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";

// interfaces
import { MovieListViewTypes } from "./Models/types";

// ts
import styles from "./styles";
import colors from "../../utils/colors";

// components
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmptyList from "../../components/EmptyList/index";
import MovieCard from "../../components/MovieCard";

function MovieListView({
  navigation,
  movieList,
  onChangeText,
  onBlur,
  value,
  shouldRenderEmpty,
  loading,
  loadMoreMovies,
}: MovieListViewTypes) {
  // renders
  function renderEmptycomponent() {
    if (!shouldRenderEmpty || loading) {
      return null;
    }

    return <EmptyList />;
  }

  function renderFooterComponent() {
    return (
      <>
        {!loading ? null : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              style={styles.loading}
              size={70}
              color={colors.blue}
            />
          </View>
        )}
      </>
    );
  }

  function renderMovieCard({ item }: any) {
    return <MovieCard movie={item} navigation={navigation} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Movies List" />

      <View style={styles.searchbarContainer}>
        <SearchBar onBlur={onBlur} onChangeText={onChangeText} value={value} />
      </View>
      <FlatList
        style={styles.listContainer}
        maxToRenderPerBatch={5}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={0.5}
        data={movieList}
        renderItem={renderMovieCard}
        keyExtractor={(_, index) => "item_" + index}
        ListFooterComponent={renderFooterComponent}
        ListEmptyComponent={renderEmptycomponent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default MovieListView;
