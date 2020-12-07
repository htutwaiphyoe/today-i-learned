import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Today from "./Today/Today";
import Form from "./Form/Form";
import Analysis from "./Analysis/Analysis";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Today} />
                    <Route path="/form" exact component={Form} />
                    <Route path="/analysis" exact component={Analysis} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
