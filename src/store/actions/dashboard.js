import * as actionTypes from "./actionTypes";
import { request, error } from "./ui";
import financy from "../../api/financy";

const storeData = (payload) => {
    return {
        type: actionTypes.STORE_DATA,
        payload,
    };
};
const transformData = (payload) => {
    const data = [];

    for (let key in payload) {
        data.push({ id: key, ...payload[key] });
    }
    return data;
};
export const clearData = () => {
    return {
        type: actionTypes.CLEAR_DATA,
    };
};

export const deleteItem = (type, id, amount) => async (dispatch) => {
    try {
        dispatch(request(true));
        await financy.delete(`/${type}/${id}.json`);
        dispatch({ type: actionTypes.DELETE_ITEM, payload: { type, id, amount } });
        dispatch(request(false));
    } catch (err) {
        dispatch(error(err));
    }
};
export const getData = (query) => async (dispatch) => {
    try {
        const orderBy = "createdAt";
        const equalTo = query;
        dispatch(request(true));
        const incomeRequest = financy.get(`/income.json?orderBy="${orderBy}"&equalTo="${equalTo}"`);
        const expenseRequest = financy.get(
            `/expense.json?orderBy="${orderBy}"&equalTo="${equalTo}"`
        );
        const response = await Promise.all([incomeRequest, expenseRequest]);
        dispatch(
            storeData({
                income: transformData(response[0].data),
                expense: transformData(response[1].data),
            })
        );
        dispatch(request(false));
    } catch (err) {
        dispatch(error(err));
    }
};
