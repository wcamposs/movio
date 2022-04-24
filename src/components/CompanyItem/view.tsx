// libraries
import React from "react";
import { Image, Text, View } from "react-native";

// interfaces
import { CompanyItemViewTypes } from "./Models/types";

// ts
import styles from "./styles";

function CompanyItemView({ formattedImagePath, name }: CompanyItemViewTypes) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: formattedImagePath }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.companyItemTitle}>{name}</Text>
    </View>
  );
}

export default CompanyItemView;
