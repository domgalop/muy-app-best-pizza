import * as actionType from '../actions/action-types';

const initialState = {
    storesData: [],
    users: [],
    validUser: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actionType.ADD_DATA:
       return {
         ...state,
         users: action.pizzaStoreData.response.users,
         storesData: action.pizzaStoreData.response.stores
       };
    case actionType.CHECK_USER:
        return {
            ...state.validUser
        };
    case actionType.GET_STORES:
        return {
            ...state.storesData
        };
   default:
       return state;
  };
};

export default reducer;