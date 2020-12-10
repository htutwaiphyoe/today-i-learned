import * as actionTypes from "./actionTypes";
import { request, error } from "./ui";
import financy from "../../api/financy";
const storeNewItem = (payload) => {
    return {
        type: actionTypes.NEW_ITEM,
        payload,
    };
};
export const addNewItem = (type, data) => async (dispatch) => {
    try {
        dispatch(request(true));
        const response = await financy.post(`/${type}.json`, data);
        dispatch(request(false));
        dispatch(
            storeNewItem({
                type,
                data: {
                    id: response.data.name,
                    ...data,
                },
            })
        );
    } catch (err) {
        dispatch(error(err));
    }
};
