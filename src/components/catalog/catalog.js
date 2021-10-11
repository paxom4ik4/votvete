import React, { useState } from 'react'

import './catalog.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

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

const Catalog = ({items, search, setSearch, selectedFilter, setSelectedFilter}) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_title`}>
        {'Каталог'}
      </div>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_search-panel`}>
          <div className={`${DEFAULT_CLASSNAME}_search-panel_input`}>
            <input
              value={search}
              onInput={(e) => setSearch(e.currentTarget.value)}
              type={'text'}
              placeholder={'Введите название товара'}
            />
            <div className={`${DEFAULT_CLASSNAME}_search-panel_btn`}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className={`${DEFAULT_CLASSNAME}_search-panel_filter`}>
            <span>{'Фильтр'}</span>
            <ul>
              <li className={selectedFilter === 'all' && 'filter-active'} id={'all'} onClick={() => setSelectedFilter('all')}>{'Все'}</li>
              <li className={selectedFilter === 'SiliconIphone' && 'filter-active'} id={'SiliconIphone'} onClick={() => setSelectedFilter('SiliconIphone')}>{'Silicon case for iPhone'}</li>
              <li className={selectedFilter === 'O-like' && 'filter-active'} id={'O-like'} onClick={() => setSelectedFilter('O-like')}>{'O-like'}</li>
              <li className={selectedFilter === 'CrystalCase' && 'filter-active'} id={'CrystalCase'} onClick={() => setSelectedFilter('CrystalCase')}>{'Crystal case iPhone'}</li>
              <li className={selectedFilter === 'ClearCase' && 'filter-active'} id={'ClearCase'} onClick={() => setSelectedFilter('ClearCase')}>{'Clear case iPhone'}</li>
            </ul>
          </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          {items.length ? items.map((item, id) => {
            return <CatalogItem logo={item.logo} title={item.title} price={item.price} key={id.toString()} />
          }): <span className={'catalog-no-results'}>{'Нет товаров соотвутствующих поиску / фильтрам'}</span>}
        </div>
      </div>
    </div>
  )
}

export default Catalog;