import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import * as actionCreators from "../../store/actions";
const Layout = (props) => {
    const auth = useSelector((state) => state.auth);
    const sidebar = useSelector((state) => state.ui.sidebar);
    const error = useSelector((state) => state.ui.error);
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
            <main className={layoutClasses.join(" ")}>
                {error ? <MessageBox message={error.message} /> : props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
