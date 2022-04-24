// libraries
import React from "react";
import { Text, View } from "react-native";

// js
import styles from "./styles";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function EmptyListView() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="frown" size={32} color="black" />
      <Text style={styles.text}>We couldn't find movies</Text>
    </View>
  );
}

export default EmptyListView;
