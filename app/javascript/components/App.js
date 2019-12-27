import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import ErrorBoundary from "./ErrorBoundary";
import AdoptionList from "../containers/AdoptionList/AdoptionList";
import Navigation from "./Navigation/Navigation";

require('typeface-roboto');

const store = configureStore();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: this.props.userEmail };
    }

    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <Navigation/>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={() => ("Home!")}/>
                            <Route path="/new/ongs" render={() => <NgosList />}/>
                            <Route exact path="/new/ong/:id" component={NgoPage}/>
                            <Route path="/adocao" render={() => <AdoptionList userEmail={this.state.userEmail} />}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
