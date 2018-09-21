import { StackNavigator } from "react-navigation";

import Home from "./home";
import Details from "./details";

const AppNavigator = StackNavigator(
  {
    home: {
      screen: Home
    },
    details: {
      screen: Details
    }
  },
  { headerMode: "none" }
);

export default AppNavigator;
