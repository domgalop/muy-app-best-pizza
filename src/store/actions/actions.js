import * as actionTypes from './action-types';

export const fetchData = data =>  {
    return dispatch => {
        fetch('https://raw.githubusercontent.com/kevmuy/test-frontend/master/RH.json')
        .then((res) => res.json())
        .then((res) => {
            dispatch(addData(res));
        });
    };
};

export const addData = data =>  {
    return {
        pizzaStoreData: data,
        type: actionTypes.ADD_DATA
    };
};

export const checkUser = () => {
    return {
        type: actionTypes.CHECK_USER
    };
};

export const getInputUser = e => {
    return {
        pizzaStoreData: e.target.value,
        type: actionTypes.GET_INPUT_USER
    };
};

export const getInputPassword = e => {
    return {
        pizzaStoreData: e.target.value,
        type: actionTypes.GET_INPUT_PASSWORD
    };
};

export const validateUser = (arrayOfObjects, userInput) => {
    return arrayOfObjects.users.some(e => e.name === userInput.name && e.password === userInput.password);
};