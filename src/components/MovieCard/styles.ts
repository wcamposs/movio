// libraries
import { StyleSheet } from "react-native";

// js
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    height: 150,

    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    overflow: "hidden",
    alignItems: "flex-start",

    //card shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  containerRow: {
    flexDirection: "row",
  },
  imageContainer: {
    marginTop: 8,
    maxHeight: 145,
    maxWidth: 120,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 130,
    borderRadius: 12,
  },
  image: {
    width: 120,
    height: 130,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginRight: 12,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  movieInfoContainer: {
    marginRight: 4,
  },
  title: {
    color: colors.black,
    marginTop: 8,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  secondaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  averageRateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  releaseDateRow: {
    // marginLeft: 48,
    flexDirection: "row",
    alignItems: "center",
  },
  voteAverageText: {
    color: colors.black,
    fontWeight: "bold",
    marginLeft: 8,
  },
  movieOverViewContainer: {
    marginVertical: 4,
  },
  overview: {
    fontSize: 13,
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default styles;
