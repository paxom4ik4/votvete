import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './contacts.css';

const DEFAULT_CLASSNAME = 'contacts';

const ContactsSection = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={`${DEFAULT_CLASSNAME}_contacts-block`}>
      <div>
        <span>{'Контакты: '}</span> <br />
        <a href="tel:+375297588585">
          <span>{'Тел: +375 (29/44/25) 758-85-85'}</span>
        </a>
      </div>
      <div>
        <span>{'ВРЕМЯ РАБОТЫ:  ПОНЕДЕЛЬНИК-ВОСКРЕСЕНЬЕ С 10:00 ДО 23:00'}</span>
      </div>
      <div>
        <span>{'Подпишись на нашу рассылку, чтобы не пропустить новые'} <span style={{color: 'red'}}>{'акции'}</span></span>
        <label placeholder={'Email'} for={'user-email'} />
        <div className={`${DEFAULT_CLASSNAME}_contacts-block_email`}>
          <input value={email} onInput={(event) => setEmail(event.currentTarget.value)} id={'user-email'} placeholder={'Введите ваш адрес электронной почты'} />
          <div className={`${DEFAULT_CLASSNAME}_contacts-block_email_subscribe`}>{'Подписаться'}</div>
        </div>
      </div>
    </div>
  )
}

const SocialNetworksSection = () => {
  const vkIcon = <FontAwesomeIcon icon={faVk} />
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
  const tikTokIcon = <FontAwesomeIcon icon={faTiktok} />
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
  const whatsAppIcon = <FontAwesomeIcon icon={faWhatsapp} />

  const icons = [vkIcon, facebookIcon, tikTokIcon, instagramIcon, whatsAppIcon];

  return (
    <div className={`${DEFAULT_CLASSNAME}_social-media_content`}>
      <span>{'Подписывайся на наши соц. сети и узнавай первым о наших предложениях'}</span>
      <div className={`${DEFAULT_CLASSNAME}_social-media`}>
        {icons.map((item, id) => (
          <div key={id} className={`${DEFAULT_CLASSNAME}_social-media-icon`}>
            {item}
          </div>
        ))}
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