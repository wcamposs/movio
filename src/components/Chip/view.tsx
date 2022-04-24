// libraries
import React from "react";
import { Text, View } from "react-native";

// interfaces
import { ChipTypes } from "./Models/types";

// ts
import styles from "./styles";

function ChipView({ name, nameColor, backgroundColor }: ChipTypes) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.typeName, { color: nameColor }]}>
        {name.toUpperCase()}
      </Text>
    </View>
  );
}

export default ChipView;
