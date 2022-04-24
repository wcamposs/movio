// libraries
import React from "react";
import { Image, Text, View } from "react-native";

// interfaces
import { CompanyItemTypes } from "./Models/types";

// components
import CompanyItemView from "./view";

function CompanyItem({ companyItem }: CompanyItemTypes) {
  const formattedImagePath = companyItem?.logo_path
    ? `https://image.tmdb.org/t/p/original${companyItem?.logo_path}`
    : "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg";

  return (
    <CompanyItemView
      name={companyItem?.name}
      formattedImagePath={formattedImagePath}
    />
  );
}

export default CompanyItem;
