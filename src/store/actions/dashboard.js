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
export const getData = () => async (dispatch) => {
    try {
        dispatch(request(true));
        const incomeRequest = financy.get("/income.json");
        const expenseRequest = financy.get("/expense.json");
        const response = await Promise.all([incomeRequest, expenseRequest]);

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
