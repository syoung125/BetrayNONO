import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameStart from "../screens/GameStart";
import GamePage2 from "../screens/GamePage2";
import GameResult from "../screens/GameResult";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MyPage from "../screens/MyPage";

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
};

const HomeStack = createStackNavigator(screens, {
<<<<<<< HEAD
  initialRouteName: "GameStart",
=======
  initialRouteName: "GameStart"
>>>>>>> 159e8cbb36b0c5d8279a5c646cbd6fa07dd6272a
});

export default createAppContainer(HomeStack);
