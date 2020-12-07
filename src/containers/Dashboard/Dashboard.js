import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Panel from "./Panel/Panel";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    if (!isSignedIn) {
        return <Redirect to="/" />;
    }
    return (
        <section className={classes.Dashboard}>
            <Panel />
            {props.children}
        </section>
    );
};
export default Dashboard;
