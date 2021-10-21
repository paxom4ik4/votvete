import React from 'react';

import './sales.css';

import promo from '../../assets/sales/promo.jpg';
import selfDeliver from '../../assets/sales/selfDeliver.jpg';
import subscribe from '../../assets/sales/subscribe.jpg';

const DEFAULT_CLASSNAME = 'sales';

const Sales = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span id={DEFAULT_CLASSNAME} />
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span className={`${DEFAULT_CLASSNAME}_title`}>{'Акции'}</span>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <span>{'Собери подарочные боксы с выгодой до '}<span className={'red-filled'}>{'5%'}</span></span>
            <img src={promo} alt={'sales-img'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <span>{'Скидка на самовывоз '} <span className={'red-filled'}>{'5%'}</span></span>
            <img src={selfDeliver} alt={'sales-img'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <span>{'Скидка'} <span className={'red-filled'}>{'5%'}</span> {'за подписку на наш Instagram и Telegram'}</span>
            <img src={subscribe} alt={'sales-img'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales;