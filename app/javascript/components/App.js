import React from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
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
        this.state = {
            user: {
                email: this.props.userEmail,
                group: this.props.userGroup,
            }
        };
    }

    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <BrowserRouter>
                        <Navigation user={this.state.user} />
                        <Switch>
                            <Route exact path="/" render={() => window.location.href = '/'}/>
                            <Route exact path="/ongs" render={() => window.location.href = '/ongs'}/>
                            <Route path="/new/ongs" render={() => <NgosList />}/>
                            <Route exact path="/new/ong/:id" component={NgoPage}/>
                            <Route path="/adocao" render={() => <AdoptionList userEmail={this.state.user.email} />}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
