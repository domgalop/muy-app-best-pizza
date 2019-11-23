import * as actionType from '../actions/action-types';
import { validateUser } from '../actions/actions';

const initialState = {
    inputUser: {
        name: '',
        password: ''
    },
    storesData: [],
    users: [],
    validUser: false
};

const validUser = state => {
    let validUser = {
        ...state,
        validUser: false
    };

    if (validateUser(state, state.inputUser)) {
        validUser = {
            ...state,
            validUser: true
        }
    }

    return validUser;
};

const addData = (action, state) => {
    return {
        ...state,
        users: action.pizzaStoreData.response.users,
        storesData: action.pizzaStoreData.response.stores
    };
};

const getInputPassword = (action, state) => {
    return {
        ...state,
        inputUser: {
            ...state.inputUser,
            password: action.pizzaStoreData
        }
    };
};

const getInputUser = (action, state) => {
    return {
        ...state,
        inputUser: {
            ...state.inputUser,
            name: action.pizzaStoreData
        }
    };
};

const getStores = state => {
    return {
        ...state.storesData
    };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_DATA:
        return addData(action, state);
    case actionType.CHECK_USER:
        return validUser(state);
    case actionType.GET_INPUT_PASSWORD:
        return getInputPassword(action, state);
    case actionType.GET_INPUT_USER:
        return getInputUser(action, state);
    case actionType.GET_STORES:
        return getStores(state);
    default:
        return state;
  };
};

export default reducer;