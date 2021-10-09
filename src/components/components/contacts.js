import React, { useState } from 'react';

import './contacts.css';

import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import tiktok from '../../assets/icons/tiktok.png';
import vk from '../../assets/icons/vk.png';
import whatsApp from '../../assets/icons/whatsApp.png';

const DEFAULT_CLASSNAME = 'contacts';

const ContactsSection = () => {
  return (
    <div className={`${DEFAULT_CLASSNAME}_contacts-block`}>
      <div>
        <span>{'Контакты: '}</span> <br />
        <span>{'Тел: +375 (29/44/25) 758-85-85'}</span>
      </div>
      <div>
        <span>{'Подпишись на нашу рассылку, чтобы не пропустить новые акции'}</span>
        <label placeholder={'Email'} for={'user-email'} />
        <div className={`${DEFAULT_CLASSNAME}_contacts-block_email`}>
          <input id={'user-email'} placeholder={'Введите ваш адрес электронной почты'} />
          <div className={`${DEFAULT_CLASSNAME}_contacts-block_email_subscribe`}>{'Подписаться'}</div>
        </div>
      </div>
    </div>
  )
}

const SocialNetworksSection = () => {
  return (
    <div className={`${DEFAULT_CLASSNAME}_social-media`}>
      <div className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
        <img src={instagram} alt={'social-icon'} /> <span>{'Instagram'}</span>
      </div>
      <div className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
        <img src={facebook} alt={'social-icon'} /> <span>{'Facebook'}</span>
      </div>
      <div className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
        <img src={tiktok} alt={'social-icon'} /> <span>{'Tik Tok'}</span>
      </div>
      <div className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
        <img src={vk} alt={'social-icon'} /> <span>{'Вконтакте'}</span>
      </div>
      <div className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
        <img src={whatsApp} alt={'social-icon'} /> <span>{'Whats App'}</span>
      </div>
    </div>
  )
}

const Contacts = () => {
  return (
    <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
      <div className={DEFAULT_CLASSNAME}>
        <ContactsSection />
        <SocialNetworksSection />
      </div>
    </div>
  )
}

export default Contacts;