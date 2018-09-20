import CONFIG from "../../../config";

export const DETAILS_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/details-actions/request`,
  SET_DATA: `${CONFIG.APP_NAME}/details-actions/set-data`,
  MESSAGE: `${CONFIG.APP_NAME}/details-actions/message`
});

export const detailsActions = Object.freeze({
  request: () => ({ type: DETAILS_ACTIONS.REQUEST }),
  setData: (field, value = null) => ({
    type: DETAILS_ACTIONS.SET_DATA,
    field,
    value
  }),
  message: value => ({ type: DETAILS_ACTIONS.MESSAGE, value })
});

const initState = {
  dataSource: [],
  isLoading: false
};

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case DETAILS_ACTIONS.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DETAILS_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value
      };
    case DETAILS_ACTIONS.MESSAGE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
