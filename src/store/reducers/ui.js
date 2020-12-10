import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../../utils/utils";
const initialState = {
    isRequested: false,
    sidebar: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST:
            return updateObj(state, { isRequested: action.payload });
        case actionTypes.SIDEBAR:
            return updateObj(state, { sidebar: action.payload });
        case actionTypes.ERROR:
            return updateObj(state, { error: action.payload, sidebar: false, isRequested: false });
        default:
            return state;
    }
};

export default reducer;
