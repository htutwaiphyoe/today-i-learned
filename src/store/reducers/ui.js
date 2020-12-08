import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../../utils/utils";
const initialState = {
    isRequested: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST:
            return updateObj(state, { isRequested: action.payload });
        default:
            return state;
    }
};

export default reducer;
