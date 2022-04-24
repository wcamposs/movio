// libraries
import React from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ts
import colors from "../../utils/colors";

// interfaces
import { HeaderTypes } from "./Models/types";

// components
import HeaderView from "./view";

const Header: React.FC<HeaderTypes> = ({
  title,
  showBackButton,
  textColor = colors.blue,
}) => {
  const navigation = useNavigation();

  const iconName = Platform.OS === "ios" ? "left" : "arrowleft";

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HeaderView
      showBackButton={showBackButton}
      handleGoBack={handleGoBack}
      iconName={iconName}
      textColor={textColor}
      title={title}
    />
  );
};

export default Header;
