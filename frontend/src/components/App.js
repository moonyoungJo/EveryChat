import React from 'react';

import {Switch, Route} from 'react-router-dom';
import {LoginPage, JoinUsPage, MainPage, NotFoundPage} from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/joinus' component={JoinUsPage} />
        <Route exact path='/main' component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;