import React from 'react';
import { Switch, Route } from "react-router-dom";

import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HatsPage = () => (
  <div>
    Hats Page to show hats
  </div>
)

const HomePage = () => (
  <div className="homepage">
    <Switch>
      <Route exact path="/" component={Directory} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
)

export default HomePage;