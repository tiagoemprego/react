import React from "react";
import { isAuthenticated } from "./auth/auth";
import { Home } from './View/Home';
import {Todo} from "./View/Todo";
import {Conversor} from "./View/Conversor";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated()
            ? ( <Component {...props}/> )
            : ( <Redirect to={{ pathname: '/', state: { from: props.location } }}/> )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1> Hello World </h1> }/>
            <PrivateRoute exact path="/home" name="home" component={ () => <Home /> }/>
            <PrivateRoute exact path="/todo" name="todo" component={ () => <Todo /> }/>
            <PrivateRoute exact path="/conversor" name="conversor" component={ () => <Conversor /> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
