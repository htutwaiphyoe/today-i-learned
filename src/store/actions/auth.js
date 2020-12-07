import * as actionTypes from "./actionTypes";

export const signIn = (payload) => {
    return {
        type: actionTypes.SIGN_IN,
        payload,
    };
};

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT,
    };
};
