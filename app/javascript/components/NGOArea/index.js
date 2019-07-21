import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from '../../configureStore';
import NGOs from '../../containers/NGOArea/NGOs';

const store = configureStore();

const NGOArea = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path='/ngo_area/new/ngos' component={NGOs} />
        </Switch>
    </BrowserRouter>
  </Provider>
);

export default NGOArea
