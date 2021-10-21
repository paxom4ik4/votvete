import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './header.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";

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
  const [burgerOpen, setBurgerOpen] = useState(true);

  const [clientWidth, setClientWidth] = useState(1920);

  useEffect(() => {
    const innerWidth = window.innerWidth;

    setClientWidth(innerWidth);
    (innerWidth < 900) && setBurgerOpen(false);
  }, [])

  return (
    <>
    <div className={DEFAULT_CLASSNAME}>
      {!pathname.includes('catalog') && <div className={`${DEFAULT_CLASSNAME}_menu-burger`}>
        <FontAwesomeIcon onClick={() => setBurgerOpen(!burgerOpen)} icon={faBars}/>
      </div>}
      <Logo />
      <div className={`${DEFAULT_CLASSNAME}_menu`}>
        <NavLink onClick={() => setPathname()} exact to={'/'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Главная'}</NavLink>
        <NavLink onClick={() => setPathname()} exact to={'/catalog'} activeClassName={'active-menu-item'} className={`${DEFAULT_CLASSNAME}_menu-item`}>{'Каталог'}</NavLink>
      </div>
    </div>
    {!pathname.includes('catalog') && (
      <div className={burgerOpen ? `${DEFAULT_CLASSNAME}_main-links` : `${DEFAULT_CLASSNAME}_main-links-close`}>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#slider'}>{'Промо'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#top-goods'}>{'Популярные товары'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#about'}>{'О Магазине'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#recommendation'}>{'Рекоммендуем'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#delivery'}>{'Доставка и Возврат'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#sales'}>{'Акции'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#custom-map'}>{'Где мы находимся'}</a>
        <a onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} href={'#contacts'}>{'Контакты'}</a>
      </div>
    )}
    </>
  )
};

export default Header;