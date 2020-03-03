import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import NgosList from "../containers/NgosList";
import NgoPage from "../containers/NgoPage";
import ErrorBoundary from "./ErrorBoundary";
import AdoptionList from "../containers/AdoptionList/AdoptionList";
import Navigation from "./Navigation/Navigation";
import SideNavigation from "./Navigation/SideNavigation/SideNavigation";
import DialogMessage from "./DialogMessage/DialogMessage";

require('typeface-roboto');

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
                            <Route exact path="/" render={() => window.location.href = '/'} />
                            <Route exact path="/ongs" render={() => window.location.href = '/ongs'} />
                            <Route path="/new/ongs" render={() => <NgosList />} />
                            <Route exact path="/new/ong/:id" component={NgoPage} />
                            <Route path="/adocao" component={AdoptionList} />
                        </Switch>
                    </BrowserRouter>
                    <DialogMessage />
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App
