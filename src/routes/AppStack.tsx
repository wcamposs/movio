// libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import MovieList from "../screens/MovieList/index";
import MovieDetails from "../screens/MovieDetails/index";

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MovieList"
      >
        <Screen name="MovieList" component={MovieList} />
        <Screen name="MovieDetails" component={MovieDetails} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
