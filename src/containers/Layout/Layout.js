import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import * as actionCreators from "../../store/actions";
const Layout = (props) => {
    const auth = useSelector((state) => state.auth);
    const sidebar = useSelector((state) => state.ui.sidebar);
    const dispatch = useDispatch();
    const sidebarHandler = useCallback(
        (payload) => {
            dispatch(actionCreators.sidebar(payload));
        },
        [dispatch]
    );
    let layoutClasses = [];
    if (sidebar) {
        layoutClasses.push("Slide");
    }

    return (
        <React.Fragment>
            <Navigation sidebarHandler={sidebarHandler} />
            {auth.user && (
                <SideDrawer auth={auth} sidebar={sidebar} sidebarHandler={sidebarHandler} />
            )}
            <main className={layoutClasses.join(" ")}>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
