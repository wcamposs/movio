import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";

import AppStack from "./routes/AppStack";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppStack />
    </View>
  );
}

export default registerRootComponent(App);
