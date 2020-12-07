import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Loader from "../components/UI/Loader/Loader";
import Dashboard from "./Dashboard/Dashboard";
import classes from "./App.module.css";

const App = () => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    // let routes = (
    //     <div className={classes.App}>
    //         <Loader />
    //     </div>
    // );
    let routes = (
        <Switch>
            <Route to="/" exact component={Home} />
        </Switch>
    );
    if (isSignedIn) {
        routes = (
            <Switch>
                <Route to="/" exact component={Dashboard} />
            </Switch>
        );
    }
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={null}>{routes}</Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
