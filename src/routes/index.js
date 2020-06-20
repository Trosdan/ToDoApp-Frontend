import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/home';
import Login from '../pages/login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" isPrivate component={Home} />
    </Switch>
  );
}
