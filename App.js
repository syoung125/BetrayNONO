import React, { useState } from "react";
import GameStart from "./screens/GameStart";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./navigation/HomeStack";

const getFonts = () =>
  Font.loadAsync({
    "Capriola-Regular": require("./assets/fonts/Capriola-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // constructor(props) {
  //   super(props);
  // }
  if (fontsLoaded) {
    return (
      <Navigator>
        <GameStart />
      </Navigator>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
