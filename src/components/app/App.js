import React, { useState, useEffect, useRef } from 'react';
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
import ScrollToTop from "../../scrollToTop";
import BuyModal from "../buy_modal";
import Recommendation from "../recommendation";
import Sales from "../sales";
import InfoPopup from "../info-popup";

// ипорт фото из папки assets
import silicone1 from "../../assets/cases/silicone1.JPG";
import silicone2 from "../../assets/cases/silicone2.JPG";
import silicone3 from "../../assets/cases/silicone3.JPG";

import crystal1 from '../../assets/cases/crystal1.JPG';
import crystal2 from '../../assets/cases/crystal2.JPG';

import plastic1 from '../../assets/cases/plastic1.JPG';
import plastic2 from '../../assets/cases/plastic2.JPG';
import plastic3 from '../../assets/cases/plastic3.JPG';

const example = [
   {
     category: 'Аксессуары для телефонов',
     subcategories: [
       {
         subcategory: 'чехлы для телефонов',
         items: [{
           title: 'чехол на айфон силиконовый',
           price: '25 BYN',
           photos: [silicone1, silicone2, silicone3],
         },{
           title: 'чехол на айфон прозрачный',
           price: '25 BYN',
           photos: [crystal1, crystal2],
         },{
           title: 'чехол на самсунг пластиковый',
           price: '25 BYN',
           photos: [plastic1, plastic2, plastic3],
         }],
       },
       {
         subcategory: 'защитные пленки и стекла',
         items: [{
           title: 'защитное стекло на iPhone',
           price: '15 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'зарядные устройства для телефонов',
         items: [{
           title: 'зарядное устройство универсальное',
           price: '20 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'портативные зарядные устройства',
         items: [{
           title: 'портативное зарядное устройство 5000 mah',
           price: '49 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'кабели для телефонов',
         items: [{
           title: 'зарядный кабель',
           price: '9 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'наушники для телефонов',
         items: [{
           title: 'наушники проводные 1м',
           price: '49 BYN',
           photos: [],
         }],
       },
     ]
   },
   {
     category: 'Аксессуары для планшетов',
     subcategories: [
       {
         subcategory: 'чехлы для планшетов',
         items: [{
           title: 'чехол на iPad силиконовый',
           price: '35 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'защитные стекла для планшетов',
         items: [{
           title: 'защитное стекло на iPad',
           price: '20 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'зарядные устройства для планшетов',
         items: [{
           title: 'зарядное устройство для iPad',
           price: '30 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'кабели для планшетов',
         items: [{
           title: 'универсальный кабель зарядки для планшетов',
           price: '19 BYN',
           photos: [],
         }],
       },
     ]
   },
   {
     category: 'Аксессуары для авто',
     subcategories: [
       {
         subcategory: 'автомобильные зарядные',
         items: [{
           title: 'автомобильное ЗУ',
           price: '19 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'держатели',
         items: [{
           title: 'автомобильный держатель для телефона',
           price: '30 BYN',
           photos: [],
         }],
       },
     ]
   },
   {
     category: 'Аксессуары для ноутбуков',
     subcategories: [
       {
         subcategory: 'аксессуары для ноутбуков',
         items: [{
           title: 'чехол для ноутбука универсальный',
           price: '49 BYN',
           photos: [],
         }],
       },
     ]
   },
   {
     category: 'Прочие аксессуары',
     subcategories: [
       {
         subcategory: 'чехлы для airpods',
         items: [{
           title: 'чехлы для airpods',
           price: '19 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'переходники',
         items: [{
           title: 'переходник',
           price: '10 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'фитнес браслеты',
         items: [{
           title: 'фитнес браслет',
           price: '79 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'ремешки для умных часов',
         items: [{
           title: 'ремешок для apple watch',
           price: '39 BYN',
           photos: [],
         },{
           title: 'ремешок для samsung watch',
           price: '34 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'ремешки для фитнес браслетов',
         items: [{
           title: 'ремешок для xiaomi mi band',
           price: '19 BYN',
           photos: [],
         }],
       },
       {
         subcategory: 'портативнве колонки',
         items: [{
           title: 'JBL flip 5',
           price: '329 BYN',
           photos: [],
         }],
       },
     ]
   },
 ]

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const [activeItem, setActiveItem] = useState({
    title: '',
    price: '',
  })

  const [activeSubcategory, setActiveSubcategory] = useState('чехлы для телефонов')

  const [activeItems, setActiveItems] = useState(example[0].subcategories[0].items);
  const popupRef = useRef();

  useEffect(() => {
    const items = example.map(category => category.subcategories.filter(subcategories => subcategories.subcategory === activeSubcategory))
    const filteredItems = items.filter(item => item.length);
    setActiveItems(filteredItems[0][0].items);
  }, [activeSubcategory])

  const [pathname, setPathname] = useState("");

  const onSetPathname = () => {
    setTimeout(() => {
      setPathname(window.location.pathname);
    })
  }

  const handleSetModal = () => {
    setShowModal(showModal => !showModal);
  }

  const handleShowPopup = (title) => {
    setPopupTitle(title);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000)
  }

  return (
    <Router>
      <div className={'main'}>
        <Header pathname={pathname} setPathname={onSetPathname} />
        { showPopup && <InfoPopup>{popupTitle}</InfoPopup> }
        <ScrollToTop />
        <Switch>
          <Route exact path={'/'}>
            <Slider setPathname={onSetPathname} />
            <Advantages />
            <TopGoods />
            <About />
            <Recommendation />
            <Delivery />
            <Sales />
            <CustomMap />
          </Route>
          <Route exact path={'/catalog'}>
            <Catalog
              items={activeItems}
              search={search}
              setSearch={setSearch}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              setShowModal={handleSetModal}
              example={example}
              activeSubcategory={activeSubcategory}
              setActiveSubcategory={setActiveSubcategory}
              setActiveItem={setActiveItem}
            />
          </Route>
        </Switch>
        {showModal && <BuyModal handleShowPopup={handleShowPopup} setShowModal={setShowModal} activeItem={activeItem} activeSubcategory={activeSubcategory} />}
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