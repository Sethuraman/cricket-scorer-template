import React from 'react';
import Scorer from '../../features/scorer/component/Scorer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Scorer} />
    </Switch>
  </BrowserRouter>
);

export default App;
