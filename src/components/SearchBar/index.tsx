// libraries
import React from "react";

// interfaces
import { SearchBarTypes } from "./Models/types";

// components
import SearchBarView from "./view";

function SearchBar({ onBlur, onChangeText, value }: SearchBarTypes) {
  function handleOnChangeText(text = "") {
    onChangeText(text);
  }

  function handleOnCleanText() {
    if (!value.length) {
      return;
    }
    onChangeText("");
  }

  return (
    <SearchBarView
      onBlur={onBlur}
      value={value}
      handleOnChangeText={handleOnChangeText}
      handleOnCleanText={handleOnCleanText}
    />
  );
}

export default SearchBar;
