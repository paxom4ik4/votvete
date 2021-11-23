import React, { useState } from 'react';
import config from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './buy_modal.css';

const DEFAULT_CLASSNAME = 'buy-modal';

const iphones = ['iphone 7/8', 'iphone 7+/8+', 'iphone X', 'iphone XR', 'iphone 11', 'iphone 11 Pro', 'iphone 11 Pro Max', 'iphone 12', 'iphone 12 Pro', 'iphone 12 Pro Max',]
const samsungs = ['Galaxy s6', 'Galaxy s7', 'Galaxy s8', 'Galaxy s9', 'Galaxy s10', 'Galaxy s20',]

const BuyModal = ({handleShowPopup, setShowModal, activeItem, activeSubcategory}) => {
  const [device, setDevice] = useState('');

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState();

  const itemsToShowDecive = ['айфон', 'самсунг'];

  const onSubmitData = () => {
    console.log(config)
    console.log("hello")
    if(!username) {
      return setError("Для подтверждения заказа введите Ваше имя!");
    }

    if(!phone) {
      return setError("Для подтверждения заказа введите контактный телефон!");
    }

    if(!phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
      return setError('Некорректный номер телефона');
    }

    let _msg = [
      '<b>Категория:</b> ' + activeSubcategory,
      '<b>Товар:</b> ' + activeItem.title,
      '<b>Цена:</b> ' + activeItem.price,
      '<b>Модель телефона:</b> ' + device,
      '<b>Пользователь:</b> ' + username,
      '<b>Телефон:</b> ' + phone,
      '-------------------------------------',
      comment
    ]

    let msg = '';

    _msg.forEach(field => {
      msg += field + '\n';
    })
    console.log(msg)

    let requestOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    }
    // url: "https://api.telegram.org/bot2073092996:AAEhIVNyUIYmbgZppevQNqyjMEXShoUXvQI/sendMessage?chat_id=-1001552470589&text=%D1%82%D0%B5%D1%81%D1%82"

    fetch(`https://api.telegram.org/bot${config.bot.token}/sendMessage?chat_id=${config.bot.chat}&parse_mode=html&text=${encodeURI(msg)}`, requestOptions)
      .then(response => response.json())
      .then((response) => {
        handleShowPopup("Заказ успешно оформлен");
        return setShowModal(false);
      })
      .catch((err) => {
        console.log(err)
        return setError("Ошибка загрузки данных")
      })
  }

  console.log(activeItem.title);
  console.log(activeItem.title.includes('айфон') || activeItem.title.includes('самсунг'));

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_content`}>
        <div className={`${DEFAULT_CLASSNAME}_close-icon`} onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes}/></div>
        <div className={`${DEFAULT_CLASSNAME}_content-title`}>{'Заказ Товара'}</div>

        {error && <div className={`${DEFAULT_CLASSNAME}_error-handler`}>{error}</div>}

        <div className={`${DEFAULT_CLASSNAME}_content-form`}>
          <label htmlFor={'userName'}>{'Как вас зовут?'}</label>
          <input
            id={'userName'}
            placeholder={'Введите ваше имя'}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor={'userPhone'}>{'Ваш контактный номер: '}</label>
          <input
            type={'tel'}
            id={'userPhone'}
            placeholder={'Введите ваш телефон'}
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
            {activeItem.title.includes('айфон') && <div>
              <div>{'Выберите ваш девайс'}</div>
              <select className={'choose-phone'} value={device} onChange={(e) => setDevice(e.currentTarget.value)} placeholder={'Выберите ваш телефон'}>
                {iphones.map(item => <option>{item}</option>)}
              </select>
            </div>}
            {activeItem.title.includes('самсунг') && <div>
              <div>{'Выберите ваш девайс'}</div>
              <select className={'choose-phone'} value={device} onChange={(e) => setDevice(e.currentTarget.value)} placeholder={'Выберите ваш телефон'}>
                {samsungs.map(item => <option>{item}</option>)}
              </select>
            </div>}
        <div className={`${DEFAULT_CLASSNAME}_content-description`}>
          <div className={`${DEFAULT_CLASSNAME}_content-description_text`}>
            <div>Товар: {activeItem.title}</div>
            <div>К оплате: {activeItem.price}</div>
          </div>
        </div>
        <div onClick={() => onSubmitData() } className={`${DEFAULT_CLASSNAME}_content-confirm-btn`}>{'Подтвердить'}</div>
      </div>
    </div>
  )
}

export default BuyModal;