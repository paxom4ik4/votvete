import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from "../header";
import Slider from "../main_slider";
import TopGoods from "../top-goods";
import Contacts from "../contacts";
import CustomMap from "../map";

const App = () => {
  return (
    <Router>
      <div className={'main'}>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Slider />
            <TopGoods />
            <CustomMap />
          </Route>
          <Route exact path={'/catalog'}>
            <TopGoods />
          </Route>
        </Switch>
        <Contacts />
      </div>
    </Router>
  )
}

export default App;