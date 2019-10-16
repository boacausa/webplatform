import React from "react"
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import ErrorBoundary from "./ErrorBoundary";
import AdoptionList from "../containers/AdoptionList/AdoptionList";

const store = configureStore();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: this.props.currentUser };
    }

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
                            <Route path="/new/adocao" render={() => <AdoptionList currentUser={this.state.currentUser} />}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
