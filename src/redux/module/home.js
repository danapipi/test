import CONFIG from "../../../config";

export const HOME_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/home-actions/request`,
  SET_DATA: `${CONFIG.APP_NAME}/home-actions/set-data`,
  MESSAGE: `${CONFIG.APP_NAME}/home-actions/message`
});

export const homeActions = Object.freeze({
  request: () => ({ type: HOME_ACTIONS.REQUEST }),
  setData: (field, value = null) => ({
    type: HOME_ACTIONS.SET_DATA,
    field,
    value
  }),
  message: value => ({ type: HOME_ACTIONS.MESSAGE, value })
});

const initState = {
  dataNews: [],
  searchData:[],
  isLoading: false
};

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case HOME_ACTIONS.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case HOME_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value
      };
    case HOME_ACTIONS.MESSAGE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
