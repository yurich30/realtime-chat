import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { privateRoutes, publicRoutes } from './Routes';

const AppRouter = () => {
    const user = true;
    return user ? 
        (
            <Switch>
                {privateRoutes.map(({path, Component}) => <Route path={path} component={Component} exact={true}/>)}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        ) :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) => <Route path={path} component={Component} exact={true}/>)}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter