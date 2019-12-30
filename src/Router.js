import React from "react";
import { isAltenticated } from "./auth/auth";
import { Home } from './View/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAltenticated()
            ? (<Component {...props}/>)
            : (<Redirect to={{pathname: '/', state: {from: props.location } }}/>)
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1> Hello World </h1> }/>
            <PrivateRoute exact path="/app" component={ () => <h1> Você esta logado!!! </h1> }/>
            <PrivateRoute exact path="/home" name="home" component={ () => <Home /> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;