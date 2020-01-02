import React from "react";
import { isAltenticated } from "./auth/auth";
import { Home } from './View/Home';
import Examples from "./View/Example";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAltenticated()
            ? ( <Component {...props}/> )
            : ( <Redirect to={{ pathname: '/', state: { from: props.location } }}/> )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1> Hello World </h1> }/>
            <PrivateRoute exact path="/app" name="app" component={ () => <h1> Você esta logado!!! </h1> }/>
            <PrivateRoute exact path="/home" name="home" component={ () => <Home /> }/>
            <PrivateRoute exact path="/exemplos" name="user" component={ () => <Examples /> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;