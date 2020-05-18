import React, { useState, useEffect } from 'react';

import Button, { BUTTON_TYPES } from '../Button';

import logo from '../../assets/logo.png';

import './index.scss';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => window.innerWidth < 768 && setIsVisible(!isVisible);

  useEffect(() => {
    const changeVisible = () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
      } else if (window.innerWidth < 768) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', () => changeVisible());
    changeVisible();

    return window.removeEventListener('resize', () => changeVisible());
  }, []);

  return (
    <div className="navbar-wrapper" data-testid="custom-navbar">
      <div className="navbar-top">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="register">
          ¿Eres un autónomo o tienes una empresa y quieres conseguir más clientes?
        </div>
        <Button
          onClick={toggleMenu}
          type={BUTTON_TYPES.transparent}
          text={isVisible ? 'X' : 'III'}
          className={!isVisible ? 'menu rotate' : 'menu'}
        />
      </div>
      <div className={isVisible ? 'navbar-links' : 'navbar-links hidden'}>
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Reformas" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Construcción" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Mudanzas" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Pintores" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Albañiles" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Parquetistas" />
        <Button onClick={toggleMenu} type={BUTTON_TYPES.transparent} text="Otros" />
      </div>
    </div>
  );
};

export default Navbar;
