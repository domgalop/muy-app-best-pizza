import * as actionTypes from './action-types';

export function fetchData() {
    return dispatch => {
        fetch('https://raw.githubusercontent.com/kevmuy/test-frontend/master/RH.json')
        .then((res) => res.json())
        .then((res) => {
            dispatch(addData(res));
        });
    };
};

export function addData(data) {
    return {
        pizzaStoreData: data,
        type: actionTypes.ADD_DATA
    };
};