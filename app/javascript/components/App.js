import React from "react"
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import * as Sentry from '@sentry/browser';

const RELEASE = '0.1.0';

if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        dsn: process.env.SENTRY_DSN_REACT,
        release: RELEASE,
    });
}

const store = configureStore();

class App extends React.Component {
    render() {
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
