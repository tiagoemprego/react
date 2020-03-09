import React from "react";
import { isAuthenticated } from "./auth/auth";
import Form from './View/Login/index';
import { Home } from './View/Home';
import { Todo } from "./View/Todo";
import { Conversor } from "./View/Conversor";
import { Accordion } from "./View/Accordion";
import {Header} from "./View/_/Header"
import Mirror from "./View/Mirror"
import ConsultApi from "./View/ConsultApi";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Store from "./Store";
import {Provider} from "react-redux";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated()
            ? ( <Component {...props}/> )
            : ( <Redirect to={{ pathname: '/login', state: { from: props.location } }}/> )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Provider store={Store}>
                <Route exact path="/login" component={ () => <Form/> }/>
                <PrivateRoute exact path="/home" name="home" component={ () => <Home /> }/>
                <PrivateRoute exact path="/todo" name="todo" component={ () => <Todo /> }/>
                <PrivateRoute exact path="/conversor" name="conversor" component={ () => <Conversor /> }/>
                <PrivateRoute exact path="/accordion" name="Accordion" component={ () => <Accordion /> }/>
                <PrivateRoute exact path="/espelho" name="Espelho" component={ () => <Mirror /> }/>
                <PrivateRoute exact path="/api" name="api" component={ () => <ConsultApi /> }/>
            </Provider>
        </Switch>
    </BrowserRouter>
);

export default Routes;
