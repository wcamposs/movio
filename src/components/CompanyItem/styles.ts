// libraries
import { StyleSheet } from "react-native";

// js
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
  },
  companyItemTitle: {
    marginTop: 4,
    marginBottom: 8,
    flexWrap: "wrap",
    color: colors.black,
    fontSize: 14,
  },
});

export default styles;
