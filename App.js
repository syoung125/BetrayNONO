import React, { useState } from "react";
import GameStart from "./screens/GameStart";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./navigation/HomeStack";

const getFonts = async () =>
  await Font.loadAsync({
    "Capriola-Regular": { uri: require("./assets/fonts/Capriola-Regular.ttf") },
    NanumSquareRoundB: { uri: require("./assets/fonts/NanumSquareRoundB.ttf") },
    NanumSquareRoundEB: {
      uri: require("./assets/fonts/NanumSquareRoundEB.ttf"),
    },
    NanumSquareRoundL: { uri: require("./assets/fonts/NanumSquareRoundL.ttf") },
    NanumSquareRoundR: { uri: require("./assets/fonts/NanumSquareRoundR.ttf") },
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
