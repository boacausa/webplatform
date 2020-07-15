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
import NewUser from "../containers/User/NewUser";
import * as RoutePaths from "../utils/RoutePaths";

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
                            <Route exact path={RoutePaths.HOME_PATH} component={HomePage} />
                            <Route path={RoutePaths.NGO_LIST_PATH} component={NgoList} />
                            <Route exact path={RoutePaths.NGO_SHOW_PATH()} component={NgoPage} />
                            <Route path={RoutePaths.ADOPTION_LIST_PATH} component={AdoptionList} />
                            <Route path={RoutePaths.UPDATE_USER_PATH} component={UserSettings} />
                            <Route path={RoutePaths.NEW_USER_PATH} component={NewUser} />
                        </Switch>
                    </BrowserRouter>
                    <DialogMessage />
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
