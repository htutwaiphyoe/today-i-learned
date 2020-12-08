import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../../utils/utils";
const initialState = {
    income: null,
    expense: null,
    totincome: 0,
    totexpense: 0,
};

const addNewItem = (state, action) => {
    const updatedData = [...state[action.payload.type]];
    updatedData.push(action.payload.data);
    let updatedTotalData = state[`tot${action.payload.type}`];
    updatedTotalData += +action.payload.data.amount;
    return updateObj(state, {
        [action.payload.type]: updatedData,
        [`tot${action.payload.type}`]: updatedTotalData,
    });
};

const storeData = (state, action) => {
    const calculateTotal = (data) => {
        let total = 0;
        for (let i of data) {
            total += +i.amount;
        }
        return total;
    };

    return updateObj(state, {
        income: action.payload.income,
        expense: action.payload.expense,
        totincome: calculateTotal(action.payload.income),
        totexpense: calculateTotal(action.payload.expense),
    });
};

const clearData = () => {
    return {
        income: null,
        expense: null,
        totincome: 0,
        totexpense: 0,
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_DATA:
            return storeData(state, action);
        case actionTypes.NEW_ITEM:
            return addNewItem(state, action);
        case actionTypes.CLEAR_DATA:
            return clearData();
        default:
            return state;
    }
};

export default reducer;
