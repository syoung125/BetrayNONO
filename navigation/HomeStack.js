import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage2 from "../screens/GamePage2";
import GameResult from "../screens/GameResult";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const screens = {
  GameStart: {
    screen: GameStart,
  },
  GamePage: {
    screen: GamePage2,
  },
  GameResult: {
    screen: GameResult,
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
};

const HomeStack = createStackNavigator(screens, {
  initialRouteName: "GameStart",
});

export default createAppContainer(HomeStack);
