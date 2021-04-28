import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from '../components/Login';
import Main from '../components/Main';
function Routes() 
{
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}  />
            <Route exact path="/main" component={Main}  />
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;
