// libraries
import { StyleSheet } from "react-native";

// js
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 24,
    backgroundColor: colors.transparent,
    zIndex: 100,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
  },
  title: (textColor: string) => ({
    paddingTop: 12,
    color: textColor,
    letterSpacing: 1,
    fontSize: 32,
    lineHeight: 32,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  }),
});

export default styles;
