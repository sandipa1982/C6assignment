import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/HelpPage';
import ToolBar from './../Components/Toolbar';
import DriverSignInPage from './../Components/DriverSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <ToolBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/UserSignIn" component={UserSignInPage} />
                <Route path="/DriverSignIn" component={DriverSignInPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;