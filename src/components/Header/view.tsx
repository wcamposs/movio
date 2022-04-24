import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// ts
import styles from "./styles";

// interfaces
import { HeaderViewTypes } from "./Models/types";

function HeaderView({
  showBackButton,
  handleGoBack,
  iconName,
  textColor,
  title,
}: HeaderViewTypes) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {!showBackButton ? (
          <View />
        ) : (
          <TouchableOpacity onPress={handleGoBack}>
            <AntDesign name={iconName} size={28} color={textColor} />
          </TouchableOpacity>
        )}

        <View style={styles.header}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.title(textColor)}
          >
            {title}
          </Text>
        </View>

        <View />
      </View>
    </View>
  );
}

export default HeaderView;
