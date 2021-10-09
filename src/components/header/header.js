import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

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
    <NavLink exact to={'/'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Главная'}</NavLink>
    <NavLink exact to={'/catalog'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Каталог'}</NavLink>
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