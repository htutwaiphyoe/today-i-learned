import * as actionTypes from "./actionTypes";

export const request = (payload) => {
    return {
        type: actionTypes.REQUEST,
        payload,
    };
};

export const sidebar = (payload) => {
    return {
        type: actionTypes.SIDEBAR,
        payload,
    };
};

export const error = (payload) => {
    return {
        type: actionTypes.ERROR,
        payload,
    };
};
