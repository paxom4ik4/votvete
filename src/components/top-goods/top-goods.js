import React from 'react';

import './top-goods.css';

// import cases images
import case_63 from '../../assets/cases/case63.png';
import case_28 from '../../assets/cases/case28.png';
import case_9 from '../../assets/cases/case9.png';

const DEFAULT_CLASSNAME = 'top-goods';
const TITLE = 'Популярные товары';

const mockedGoods = [
  {
    logo: case_63,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    logo: case_28,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
  {
    logo: case_9,
    title: 'Silicone case for 12/12 Pro',
    price: '25,00'
  },
]

const TopGoodItem = ({logo, title, price}) => (
  <div className={`${DEFAULT_CLASSNAME}_item-content`}>
    <img src={logo} alt={'case image'} />
    <span className={`${DEFAULT_CLASSNAME}_item-title`}>{title}</span>
    <span className={`${DEFAULT_CLASSNAME}_item-price`}>{`${price} BYN`}</span>
    <div className={`${DEFAULT_CLASSNAME}_item-order-btn`}>{'Заказать'}</div>
  </div>
)

const TopGoods = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
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