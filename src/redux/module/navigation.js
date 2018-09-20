import AppNavigator from "../../views/root-navigation";

const initState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("details")
);

const navReducer = (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
