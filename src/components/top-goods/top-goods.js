import React from 'react';
import './top-goods.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import cases images
import silicone1 from '../../assets/cases/silicone1.JPG';
import silicone2 from '../../assets/cases/silicone2.JPG';
import silicone3 from '../../assets/cases/silicone3.JPG';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const DEFAULT_CLASSNAME = 'top-goods';
const TITLE = 'Популярные товары';

const mockedGoods = [
  {
    logo: silicone1,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    logo: silicone2,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    logo: silicone3,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
]

const shoppingCart = <FontAwesomeIcon icon={faCartPlus}/>;

const TopGoodItem = ({logo, title, price}) => (
  <div className={`${DEFAULT_CLASSNAME}_item-content`}>
    <img src={logo} alt={'case image'} />
    <span className={`${DEFAULT_CLASSNAME}_item-title`}>{title}</span>
    <span className={`${DEFAULT_CLASSNAME}_item-price`}>{`${price} BYN`}</span>
    <NavLink className={`${DEFAULT_CLASSNAME}_item-order-btn`} exact to={'/catalog'}>
      {shoppingCart} <span>{'Перейти в каталог'}</span>
    </NavLink>
  </div>
)

const TopGoods = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span id={DEFAULT_CLASSNAME} />
      <h2>{TITLE}</h2>
      <div className={`${DEFAULT_CLASSNAME}_container`}>
        {mockedGoods.map((item, id) => (
          <TopGoodItem logo={item.logo} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default TopGoods;