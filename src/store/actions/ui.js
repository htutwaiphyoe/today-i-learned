import * as actionTypes from "./actionTypes";

export const request = (payload) => {
    return {
        type: actionTypes.REQUEST,
        payload,
    };
};
