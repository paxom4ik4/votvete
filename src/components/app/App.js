import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import './App.css';

import Header from "../header";
import Contacts from "../contacts";

import case_63 from "../../assets/cases/case63.png";
import case_28 from "../../assets/cases/case28.png";
import case_9 from "../../assets/cases/case9.png";
import ScrollToTop from "../../scrollToTop";
import TransitionSwitch from "../../transitionSwitch";

const items = [
  {
    id: 63,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 28,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 9,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 64,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 29,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 10,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 42,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 43,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    id: 44,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
];

const App = () => {
  return (
    <Router>
      <div className={'main'}>
        <Header />
        <ScrollToTop />
        <TransitionSwitch items={items} />
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