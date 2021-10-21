import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

import './header.css';

const DEFAULT_CLASSNAME = 'header';

const LOGO_TITLE = "VOTVETE.CASE";
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

const Header = ({pathname, setPathname}) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <Logo />
      {!pathname.includes('catalog') && (
        <div className={`${DEFAULT_CLASSNAME}_main-links`}>
          <a href={'#slider'}>{'Промо'}</a>
          <a href={'#top-goods'}>{'Популярные товары'}</a>
          <a href={'#about'}>{'О Магазине'}</a>
          <a href={'#recommendation'}>{'Рекоммендуем'}</a>
          <a href={'#delivery'}>{'Доставка и Возврат'}</a>
          <a href={'#sales'}>{'Акции'}</a>
          <a href={'#custom-map'}>{'Где мы находимся'}</a>
          <a href={'#contacts'}>{'Контакты'}</a>
        </div>
      )}
      <div className={`${DEFAULT_CLASSNAME}_menu`}>
        <NavLink onClick={() => setPathname()} exact to={'/'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Главная'}</NavLink>
        <NavLink onClick={() => setPathname()} exact to={'/catalog'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Каталог'}</NavLink>
      </div>
    </div>
  )
};

export default Header;