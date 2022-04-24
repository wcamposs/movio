// libraries
import { Dimensions, StyleSheet } from "react-native";

// js
import colors from "../../utils/colors";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    marginTop: -36,
    marginBottom: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  movieContainer: {
    paddingTop: 24,
  },
  videoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.transparent,
  },
  image: {
    width: windowWidth,
    height: 220,
  },
  titleContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  title: {
    flexWrap: "wrap",
    paddingTop: 12,
    color: colors.black,
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  // overview
  overviewContainer: {
    marginTop: 12,
    width: windowWidth,
  },
  overviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 32,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  overviewText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
  },
  voteAverage: {
    marginLeft: 8,
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
  },
  overviewTextContainer: {
    marginVertical: 12,
    marginHorizontal: 32,
  },
  overviewFullText: {
    color: colors.black,
    fontSize: 16,
    textAlign: "justify",
  },

  // genres
  genresContainer: {
    width: windowWidth,
  },
  genresTitleRow: {
    marginHorizontal: 32,
    marginBottom: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  genresTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  genresRow: {
    marginHorizontal: 24,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  chipContainer: {
    flexWrap: "wrap",
    margin: 4,
  },

  // more info
  moreInfoContainer: {
    width: windowWidth,
  },
  moreInfoTitleRow: {
    marginHorizontal: 32,
    marginVertical: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  moreInfoTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  infoContainer: {
    //
  },
  infoRow: {
    marginHorizontal: 32,
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  singleRow: {
    flexDirection: "row",
  },
  generalInfoTitle: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  generalInfoValue: {
    color: colors.black,
    fontSize: 14,
    marginRight: 8,
  },

  // produced by
  producedByContainer: {
    width: windowWidth,
  },
  producedByTitleRow: {
    marginHorizontal: 32,
    marginVertical: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  producedByTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  producedContainer: {
    marginHorizontal: 32,
    marginBottom: 12,
  },
});

export default styles;
