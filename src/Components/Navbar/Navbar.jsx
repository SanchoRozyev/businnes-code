import React from 'react';
import '../../Global-Style.css';
import './Navbar.css';
import Dropdown from '../Assets/dropdown.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo nav-logo | fs-500 fw-bold"><a href="#" className='txt-drk-tit'>Михельсон</a></div>
      <ul className='nav-menu1 navigation-menu fs-300 fw-bold' role='list'>
        <li><a className='txt-drk-b' href="#usligi">Виды услуг</a></li>
        <li><a className='txt-drk-b' href="#about">Обо мне</a></li>
        <li><a className='txt-drk-b' href="#howi">Как я работаю</a></li>
        <li><a className='txt-drk-b' href="#reviews">Отзывы</a></li>
        <li><a className='txt-drk-b' href="#contacts">Контакты</a></li>
      </ul>
      <div className="phone-number">
        <p className='fs-100 fw-bold txt-drk-b'>Звоните прямо сейчас!</p>
        <p className='fs-300 fw-reg txt-drk-tit'>+7 495 123-45-67</p>
      </div>
      <div className="call-button">
        <a href="#call" className='txt-lgh-tit'><button className='bg-sec txt-lgh-tit fs-300 fw-reg'>Заказать звонок</button></a>
      </div>
      <div className='dropdown-con'>
        <div className='dropdown'>
          <button className='dropdown-button bg-pr-1'><img src={Dropdown} alt="" /></button>
          <ul className='nav-menu2 navigation-menu fs-300 fw-reg' role='list'>
            <li><a className='txt-lgh-tit' href="#uslugi">Виды услуг</a></li>
            <li><a className='txt-lgh-tit' href="#about">Обо мне</a></li>
            <li><a className='txt-lgh-tit' href="#howi">Как я работаю</a></li>
            <li><a className='txt-lgh-tit' href="#reviews">Отзывы</a></li>
            <li><a className='txt-lgh-tit' href="#contacts">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
