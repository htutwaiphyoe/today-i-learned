import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route to="/" exact component={Home} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
