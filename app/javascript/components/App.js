import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import ErrorBoundary from "./ErrorBoundary";
import AdoptionList from "../containers/AdoptionList/AdoptionList";
import Navigation from "./Navigation/Navigation";
import SideNavigation from "./Navigation/SideNavigation/SideNavigation";
import HomePage from "../containers/HomePage/HomePage";
import DialogMessage from "./DialogMessage/DialogMessage";
import UserSettings from "../containers/UserSettings/UserSettings";
import NgoList from "../containers/NgoList/NgoList";
import NgoPage from "../containers/NgoList/NgoPage";

import '../fonts/roboto/index.css';

class App extends React.Component {
    state = {
        sideNavigationVisible: false
    };

    toggleDrawerButtonHandler = () => {
        this.setState({sideNavigationVisible: !this.state.sideNavigationVisible});
    };

    sideDrawerCloseHandler = () => {
        this.setState({sideNavigationVisible: false});
    };

    render() {
        const {user} = this.props;
        const store = configureStore(user);

        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <BrowserRouter>
                        <Navigation toggleDrawerButton={this.toggleDrawerButtonHandler} user={user} />
                        <SideNavigation
                            user={user}
                            visible={this.state.sideNavigationVisible}
                            close={this.sideDrawerCloseHandler}
                        />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/ongs" component={NgoList} />
                            <Route exact path="/ong/:id" component={NgoPage} />
                            <Route path="/adocao" component={AdoptionList} />
                            <Route path="/settings" component={UserSettings} />
                        </Switch>
                    </BrowserRouter>
                    <DialogMessage />
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
