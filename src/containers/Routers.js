import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// containers
import {
    Users,
    User,
    CreateUser,
    EditUser,
} from ".";


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'  component={() => <Redirect to='/page/1' />} />
                <Route exact path='/page/:page' component={Users} />
                <Route exact path='/users/new' component={CreateUser} />
                <Route exact path='/users/:id/edit' component={EditUser} />
                <Route exact path='/users/:id' component={User} />
            </Switch>
        </BrowserRouter>
    );
};


export {Routers};
