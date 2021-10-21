import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './header.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-scroll';

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

  const scrollToElement = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

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
      <div className={burgerOpen ? `${DEFAULT_CLASSNAME}_main-links` : `${DEFAULT_CLASSNAME}_main-links ${DEFAULT_CLASSNAME}_main-links-close`}>
        <Link activeClass="active" to="slider" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Промо'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="top-goods" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Популярные товары'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="about" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'О Магазине'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="recommendation" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Рекомендуем'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="delivery" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Доставка и Возврат'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="sales" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Акции'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="custom-map" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Где мы находимся'}</span>
        </Link>
        <Link onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)} activeClass="active" to="contacts" spy={true} smooth={true} duration={800}>
          <span onClick={() => clientWidth < 900 && setBurgerOpen(!burgerOpen)}>{'Контакты'}</span>
        </Link>
      </div>
    )}
    </>
  )
};

export default Header;