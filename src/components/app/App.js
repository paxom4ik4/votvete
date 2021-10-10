import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import './App.css';
import Header from "../header";
import Slider from "../main_slider";
import TopGoods from "../top-goods";
import Contacts from "../contacts";
import CustomMap from "../map";
import Advantages from "../advantages";
import About from "../about/about";
import Delivery from "../delivery/delivery";

const App = () => {
  return (
    <Router>
      <div className={'main'}>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Slider />
            <Advantages />
            <TopGoods />
            <About />
            <Delivery />
            <CustomMap />
          </Route>
          <Route exact path={'/catalog'}>
            <TopGoods />
          </Route>
        </Switch>
        <Contacts />
        <div className={'telegram-link'}>
          <FontAwesomeIcon icon={faTelegram} />
        </div>
        <div className={'telegram-link-pulse'} />
      </div>
    </Router>
  )
}

export default App;