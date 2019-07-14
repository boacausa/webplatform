import React from "react"
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import NGOs from '../containers/NGOArea/NGOs';
import dotenv from 'dotenv';
import ErrorBoundary from "./ErrorBoundary";

dotenv.config({ silent: true });

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={() => ("Home!")}/>
                            <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>}/>
                            <Route path="/new/ongs" render={() => <NgosList />}/>
                            <Route exact path="/new/ong/:id" component={NgoPage}/>
                            <Route path='/new/ngo-area/ngos' component={NGOs} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
