import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import GameStart from "./screens/GameStart";
import Navigator from "./navigation/HomeStack";
import GlobalFont from "react-native-global-font";
import { HashRouter, Route } from "react-router-dom";

const getFonts = async () => {
  await Font.loadAsync({
    "Capriola-Regular": { uri: require("./assets/fonts/Capriola-Regular.ttf") },
    NanumSquareRoundB: { uri: require("./assets/fonts/NanumSquareRoundB.ttf") },
    NanumSquareRoundEB: {
      uri: require("./assets/fonts/NanumSquareRoundEB.ttf"),
    },
    NanumSquareRoundL: { uri: require("./assets/fonts/NanumSquareRoundL.ttf") },
    NanumSquareRoundR: { uri: require("./assets/fonts/NanumSquareRoundR.ttf") },
  }),
    (fontName = "NanumSquareRoundR");
  GlobalFont.applyGlobal(fontName);
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <HashRouter>
        <Navigator>
          <Route path="/" exact={true} component={GameStart} />
        </Navigator>
      </HashRouter>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
