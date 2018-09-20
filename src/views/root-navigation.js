import { StackNavigator } from "react-navigation";

import styles from "./styles";

import Details from "./details";

const AppNavigator = StackNavigator({
  details: {
    screen: Details,
    navigationOptions: { headerStyles: styles.header }
  }
});

export default AppNavigator;
