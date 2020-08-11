import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage from "../screens/GamePage";
import GameResult from "../screens/GameResult";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MyPage from "../screens/MyPage";
import QuizList from "../screens/QuizList";

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
};

const HomeStack = createStackNavigator(screens, {
  initialRouteName: "GameStart",
});

export default createAppContainer(HomeStack);
