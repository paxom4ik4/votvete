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
import BuyModal from "../buy_modal";

const items = [
  {
    id: 63,
    logo: case_63,
    title: 'Silicone Case',
    price: '25,00',
    type: 'SiliconIphone',
  },
  {
    id: 28,
    logo: case_28,
    title: 'O-like case for 12/12 Pro',
    price: '25,00',
    type: 'O-like',
  },
  {
    id: 9,
    logo: case_9,
    title: 'Crystal Case',
    price: '25,00',
    type: 'CrystalCase',
  },
  {
    id: 64,
    logo: case_63,
    title: 'Clear Case',
    price: '25,00',
    type: 'ClearCase'
  },
  {
    id: 29,
    logo: case_28,
    title: 'ClearCase case for 12/12 Pro',
    price: '25,00',
    type: 'ClearCase'
  },
  {
    id: 10,
    logo: case_9,
    title: 'O like case',
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
    title: 'SiliconIphone',
    price: '25,00',
    type: 'SiliconIphone',
  },
  {
    id: 44,
    logo: case_9,
    title: 'CrystalCase',
    price: '25,00',
    type: 'CrystalCase',
  },
]

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [itemsToShow, setItemsToShow] = useState(items);

  useEffect(() => {
    if(search.trim() === '' && selectedFilter === 'all') {
      setItemsToShow(items);
      return;
    }

    if (search.trim() !== '' && selectedFilter === 'all') {
      const searchItems = items.filter((item) => {
        return item.title.toLowerCase().includes(search.trim().toLowerCase());
      });
      setItemsToShow(searchItems);
      return;
    }

    if (selectedFilter !== 'all' && search.trim() === '') {
      const filteredItems = items.filter((item) => {
        return item.type === selectedFilter;
      });
      setItemsToShow(filteredItems);
      return;
    }

    const filteredItems = items.filter((item) => {
      return item.type === selectedFilter;
    });

    const searchItems = filteredItems.filter((item) => {
      return item.title.toLowerCase().includes(search.trim().toLowerCase());
    });

    setItemsToShow(searchItems);
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
              setShowModal={setShowModal}
            />
          </Route>
        </Switch>
        {showModal && <BuyModal setShowModal={setShowModal} />}
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