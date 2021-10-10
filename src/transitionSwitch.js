import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, useLocation } from "react-router-dom";
import Slider from "./components/main_slider";
import Advantages from "./components/advantages";
import TopGoods from "./components/top-goods";
import About from "./components/about/about";
import Delivery from "./components/delivery/delivery";
import CustomMap from "./components/map";
import Catalog from "./components/catalog";

const TransitionSwitch = ({items}) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route exact path={'/'}>
            <Slider />
            <Advantages />
            <TopGoods />
            <About />
            <Delivery />
            <CustomMap />
          </Route>
          <Route exact path={'/catalog'}>
            <Catalog items={items} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default TransitionSwitch;