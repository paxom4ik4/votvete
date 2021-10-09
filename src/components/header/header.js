import React from 'react';
import logo from '../../assets/logo.png';

import './header.css';

const DEFAULT_CLASSNAME = 'header';

const LOGO_TITLE = "VOTVETE";
const LOGO_SUBTITLE = 'Аксессуары | Стёкла | Чехлы'

const Logo = () => (
  <div className={`${DEFAULT_CLASSNAME}_logo`}>
    <img src={logo} alt={'logo'} />
    <div className={`${DEFAULT_CLASSNAME}_logo-text`}>
      <span className={`${DEFAULT_CLASSNAME}_logo-text-title`}>{LOGO_TITLE}</span>
      <span className={`${DEFAULT_CLASSNAME}_logo-text-subtitle`}>{LOGO_SUBTITLE}</span>
    </div>
  </div>
)

const HeaderMenu = () => (
  <div className={`${DEFAULT_CLASSNAME}_menu`}>
    <div className={`${DEFAULT_CLASSNAME}_menu-item active-menu-item`}>{'Главная'}</div>
    <div className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Каталог'}</div>
  </div>
)

const Header = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <Logo />
      <HeaderMenu />
    </div>
  )
};

export default Header;