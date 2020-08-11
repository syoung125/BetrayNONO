import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage from "../screens/GamePage";
import GameResult from "../screens/GameResult";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MyPage from "../screens/MyPage";
<<<<<<< HEAD
import QuizList from "../screens/QuizList";
=======
import GameSetResult1 from "../screens/GameSetResult1";
>>>>>>> d130e4686841c6c307e0a91a999dfb8c8a23bffb

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
