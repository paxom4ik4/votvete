import React from 'react';

import './advantages.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faStar, faShoppingBag, faTags } from "@fortawesome/free-solid-svg-icons";

const DEFAULT_CLASSNAME = 'advantages';

const Advantages = () => {
  const deliveryIcon = <FontAwesomeIcon className={'font-awesome-icon'} icon={faShippingFast} />
  const qualityIcon = <FontAwesomeIcon className={'font-awesome-icon'} icon={faStar} />
  const shoppingIcon = <FontAwesomeIcon className={'font-awesome-icon'} icon={faShoppingBag} />
  const discountSystemIcon = <FontAwesomeIcon className={'font-awesome-icon'} icon={faTags} />

  const advantageItems = [
    {
      title: 'Быстрая и удобная доставка',
      icon: deliveryIcon,
    },
    {
      title: 'Гарантия качества',
      icon: qualityIcon,
    },
    {
      title: 'Лучшие товары',
      icon: shoppingIcon,
    },
    {
      title: 'Дисконтная система',
      icon: discountSystemIcon,
    },
  ]

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_title`}>{'Наши преимущества'}</div>
      <div className={`${DEFAULT_CLASSNAME}_content`}>
        {advantageItems.map((item, id) => {
          return (
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              {item.icon}
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Advantages;