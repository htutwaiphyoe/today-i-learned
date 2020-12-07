import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../../utils/utils";
const initialState = {
    isSignedIn: false,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return updateObj(state, { isSignedIn: true, user: action.payload });
        case actionTypes.SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
