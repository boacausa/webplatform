import React from "react"
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import * as Sentry from '@sentry/browser';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

Sentry.init({ dsn: process.env.SENTRY_DSN_REACT });

const store = configureStore();

class App extends React.Component {
    render() {
        console.log("env", process.env.SENTRY_DSN_REACT);
        console.log("NODE env", process.env.NODE_ENV);
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => ("Home!")}/>
                        <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>}/>
                        <Route path="/new/ongs" render={() => <NgosList />}/>
                        <Route exact path="/new/ong/:id" component={NgoPage}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App
