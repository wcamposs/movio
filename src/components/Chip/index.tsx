// libraries
import React from "react";

// interfaces
import { ChipTypes } from "./Models/types";

// components
import ChipView from "./view";

function Chip({ name, nameColor, backgroundColor }: ChipTypes) {
  return (
    <ChipView
      name={name}
      nameColor={nameColor}
      backgroundColor={backgroundColor}
    />
  );
}

export default Chip;
