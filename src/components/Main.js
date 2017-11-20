import React from 'react';
import {Route} from 'react-router-dom';
import Profile from './Profile';
import Lists from './Lists';

const MainContent = () => (
  <div id="main" role="main">
    <Route path="/profile" component={Profile} />
    <Route path="/Lists" component={Lists} />
  </div>
);

export default MainContent;
