import React from 'react'

import './catalog.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

const DEFAULT_CLASSNAME = 'catalog';

const shoppingCart = <FontAwesomeIcon icon={faCartPlus}/>;

const CatalogItem = ({logo, title, price}) => (
  <div className={'top-goods_item-content'}>
    <img src={logo} alt={'case image'} />
    <span className={`top-goods_item-title`}>{title}</span>
    <span className={`top-goods_item-price`}>{`${price} BYN`}</span>
    <div className={`top-goods_item-order-btn`}>
      {shoppingCart} <span>{'Заказать'}</span>
    </div>
  </div>
)

const Catalog = ({items}) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_title`}>
        {'Каталог'}
      </div>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_search-panel`}>
          <div className={`${DEFAULT_CLASSNAME}_search-panel_input`}>
            <input type={'text'} placeholder={'Введите название товара'} />
            <div className={`${DEFAULT_CLASSNAME}_search-panel_btn`}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className={`${DEFAULT_CLASSNAME}_search-panel_filter`}>
            <span>{'Фильтр'}</span>
            <ul>
              <li className={'filter-active'} id={'filter-all'}>{'Все'}</li>
              <li id={'filter-silicon'}>{'Silicon case for iPhone'}</li>
              <li id={'filter-o-like'}>{'O-like'}</li>
              <li id={'filter-crystal'}>{'Crystal case iPhone'}</li>
              <li id={'filter-clear'}>{'Clear case iPhone'}</li>
            </ul>
          </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          {items.map((item, id) => {
            return <CatalogItem logo={item.logo} title={item.title} price={item.price} key={id.toString()} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Catalog;