// libraries
import { StyleSheet } from "react-native";

// js
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderRadius: 12,
    borderWidth: 0.5,
    flexDirection: "row",
    paddingHorizontal: 12,
    marginTop: 12,
    marginHorizontal: 12,
    height: 42,
  },
  icon: {
    padding: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default styles;
