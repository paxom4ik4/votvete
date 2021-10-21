import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './buy_modal.css';

import case_63 from "../../assets/cases/case63.png";

const DEFAULT_CLASSNAME = 'buy-modal';

const BuyModal = ({setShowModal}) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_content`}>
        <div className={`${DEFAULT_CLASSNAME}_close-icon`} onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes}/></div>
        <div className={`${DEFAULT_CLASSNAME}_content-title`}>{'Заказ Товара'}</div>
        <div className={`${DEFAULT_CLASSNAME}_content-form`}>
          <label htmlFor={'userName'}>{'Как вас зовут?'}</label>
          <input id={'userName'} placeholder={'Введите ваше имя'} />

          <label htmlFor={'userPhone'}>{'Ваш контактный номер: '}</label>
          <input type={'tel'} id={'userPhone'} placeholder={'Введите ваш телефон'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content-description`}>
          <div className={`${DEFAULT_CLASSNAME}_content-description_photo`}>
            <img src={case_63} alt={'case-photo'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-description_text`}>
            <div>{'Silicone case for 12/12 Pro'}</div>
            <div>{'25,00 BYN'}</div>
          </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content-confirm-btn`}>{'Подтвердить'}</div>
      </div>
    </div>
  )
}

export default BuyModal;