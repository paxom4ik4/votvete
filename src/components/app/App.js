import React, { useState, useEffect } from 'react';
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
import Catalog from "../catalog";

import case_63 from "../../assets/cases/case63.png";
import case_28 from "../../assets/cases/case28.png";
import case_9 from "../../assets/cases/case9.png";
import ScrollToTop from "../../scrollToTop";

const items = [
  {
    id: 63,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'SiliconIphone',
  },
  {
    id: 28,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'O-like',
  },
  {
    id: 9,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'CrystalCase',
  },
  {
    id: 64,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'ClearCase'
  },
  {
    id: 29,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'ClearCase'
  },
  {
    id: 10,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'O-like',
  },
  {
    id: 42,
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'SiliconIphone',
  },
  {
    id: 43,
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'SiliconIphone',
  },
  {
    id: 44,
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00',
    type: 'CrystalCase',
  },
]

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [itemsToShow, setItemsToShow] = useState(items);

  useEffect(() => {
    if(search === '' && selectedFilter === 'all') {
      setItemsToShow(items);
    } else if (search && selectedFilter === 'all') {
      const searchItems = items.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setItemsToShow(searchItems);
    } else if (selectedFilter !== 'all' && search === '') {
      const filteredItems = items.filter((item) => {
        return item.type === selectedFilter;
      });
      setItemsToShow(filteredItems);
    } else {
      const searchItems = items.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });

      const filteredItems = items.filter((item) => {
        return item.type === selectedFilter;
      });
      setItemsToShow(filteredItems.length > searchItems.length ? searchItems : filteredItems);
    }
  }, [search, selectedFilter])

  return (
    <Router>
      <div className={'main'}>
        <Header />
        <ScrollToTop />
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
            <Catalog
              items={itemsToShow}
              search={search}
              setSearch={setSearch}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
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