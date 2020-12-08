import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import dashboardReducer from "./dashboard";
export default combineReducers({
    auth: authReducer,
    ui: uiReducer,
    dashboard: dashboardReducer,
});
