import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage from "../screens/GamePage";
import GameResult from "../screens/GameResult";
import GameResult2 from "../screens/GameResult2";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MyPage from "../screens/MyPage";
import QuizList from "../screens/QuizList";
import GameSetResult1 from "../screens/GameSetResult1";

const screens = {
  GameStart: {
    screen: GameStart,
  },
  GamePage: {
    screen: GamePage,
  },
  GameResult: {
    screen: GameResult,
  },
  GameResult2: {
    screen: GameResult2,
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
  QuizList: {
    screen: QuizList,
  },
  GameSetResult1: {
    screen: GameSetResult1,
  }
};

const HomeStack = createStackNavigator(screens, {
  initialRouteName: "GameStart",
});

export default createAppContainer(HomeStack);
