/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { Router, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// core components
import App from "./App";
import "./assets/css/material-dashboard-react.css?v=1.8.0";
import {Provider} from "react-redux";
const store = configureStore()
const hist = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={'/pms-web'}>
            <Router history={hist}>
                <Switch>
                    <Route path="/pms-web" component={App} />
                    <Redirect from="/" to="/pms-web" />
                </Switch>
            </Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
