import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

// ts
import colors from "../../utils/colors";
import styles from "./styles";

// interfaces
import { SearchBarViewTypes } from "./Models/types";

function SearchBarView({
  onBlur,
  handleOnChangeText,
  handleOnCleanText,
  value,
}: SearchBarViewTypes) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        onChangeText={handleOnChangeText}
        placeholder="Search a movie..."
        selectTextOnFocus
        style={styles.input}
        value={value}
        returnKeyType="search"
        onBlur={onBlur}
      />
      {!value.length ? null : (
        <Feather
          color={colors.darkBlue}
          name="x"
          onPress={handleOnCleanText}
          size={20}
          type="light"
          containerStyle={styles.icon}
        />
      )}
    </View>
  );
}

export default SearchBarView;
