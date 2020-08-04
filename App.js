import React, { useState } from "react";
import GameStart from "./screens/GameStart";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./navigation/HomeStack";
<<<<<<< HEAD
import GlobalFont from "react-native-global-font";
=======
import GameResult from "./screens/GameResult";
>>>>>>> 6593e488833e43774e83b6de07a37b5eda8edbec

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
  let fontName = "NanumSquareRoundR";
  GlobalFont.applyGlobal(fontName);
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
