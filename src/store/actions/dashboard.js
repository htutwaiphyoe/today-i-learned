import * as actionTypes from "./actionTypes";
import { request } from "./ui";
import financy from "../../api/financy";

const storeData = (payload) => {
    console.log(payload);
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

export const deleteItem = (type, id) => async (dispatch) => {
    try {
        await financy.delete(`/${type}/${id}.json`);
        dispatch({ type: actionTypes.DELETE_ITEM, payload: { type, id } });
    } catch (err) {
        console.log(err);
    }
};
export const getData = (email) => async (dispatch) => {
    try {
        dispatch(request(true));
        const incomeRequest = financy.get(`/income.json?orderBy="email"&equalTo="${email}"`);
        const expenseRequest = financy.get(`/expense.json?orderBy="email"&equalTo="${email}"`);
        const response = await Promise.all([incomeRequest, expenseRequest]);
        console.log(response);
        dispatch(
            storeData({
                income: transformData(response[0].data),
                expense: transformData(response[1].data),
            })
        );
        dispatch(request(false));
    } catch (e) {
        console.log(e);
    }
};
