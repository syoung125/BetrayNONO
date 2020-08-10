import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage2 from "../screens/GamePage2";
import GameResult from "../screens/GameResult";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MyPage from "../screens/MyPage";
import GameSetResult1 from "../screens/GameSetResult1";

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
  MyPage: {
    screen: MyPage,
  },
  GameSetResult1: {
    screen: GameSetResult1,
  },
};

const HomeStack = createStackNavigator(screens, {
  initialRouteName: "GameSetResult1",
});

export default createAppContainer(HomeStack);
