import React, {useEffect, useState} from 'react'

import { Carousel } from 'react-responsive-carousel';

import './catalog.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const DEFAULT_CLASSNAME = 'catalog';

const shoppingCart = <FontAwesomeIcon icon={faCartPlus}/>;

const CatalogItem = ({photos, title, price, setShowModal, setActiveItem}) => (
  <div className={'top-goods_item-content'}>
    {photos.length ?
      <Carousel
        showStatus={false}
        swipeable={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {photos.map(photo => {
          return (
            <div className={'slide-item'}>
              <img src={photo}/>
            </div>
          )
        })}
      </Carousel> :
      <div className={'top-goods_item-content-no_photo'}>{'Нет Фото'}</div>
    }
    <span className={`top-goods_item-title`}>{title}</span>
    <span className={`top-goods_item-price`}>{`${price}`}</span>
    <div className={`top-goods_item-order-btn`}>
      {shoppingCart} <span onClick={() => {
      setActiveItem({
        title,
        price,
      });
      setShowModal(true);
    }}>{'Заказать'}</span>
    </div>
  </div>
)

const Catalog = ({items, search, setSearch, selectedFilter, setSelectedFilter, setShowModal, example, activeSubcategory, setActiveSubcategory, setActiveItem}) => {
  console.log(example);

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_title`}>
        {'Каталог'}
      </div>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_search-panel`}>
          <div className={`${DEFAULT_CLASSNAME}_search-panel_filter`}>
            <ul>
              {example.map(category => {
                return <ul>
                  <li className={`${DEFAULT_CLASSNAME}_category`}>{category.category}</li>
                  <ul>
                    {category.subcategories.map(subcategory => {
                      return <li
                        onClick={() => setActiveSubcategory(subcategory.subcategory)}
                        className={activeSubcategory === subcategory.subcategory ? `${DEFAULT_CLASSNAME}_subcategory active` : `${DEFAULT_CLASSNAME}_subcategory`}>
                        {subcategory.subcategory}
                      </li>
                    })}
                  </ul>
                </ul>
              })}
            </ul>
          </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          {items.length ? items.map((item, id) => {
            return <CatalogItem photos={item.photos} title={item.title} price={item.price} key={id.toString()} setShowModal={setShowModal} setActiveItem={setActiveItem}/>
          }): <span className={'catalog-no-results'}>{'Нет товаров соотвутствующих поиску / фильтрам'}</span>}
        </div>
      </div>
    </div>
  )
}

export default Catalog;