import React from 'react'
import '../../Global-Style.css';
import './Footer.css';
import Facebook from '../Assets/Facebook.svg'
import Inst from '../Assets/Instagram.svg'
import Twit from '../Assets/Twitter.svg'
import VK from '../Assets/VK.svg'

const Footer = () => {
  return (
    <section id='footer' className='footer bg-pr-2'>
      <div>
        <div className='soc-med-con'>
          <a href="https://www.facebook.com/" target='_blank'><div className='bg-pr-1'><img src={Facebook} alt="" /></div></a>
          <a href="https://www.instagram.com/" target='_blank'><div className='bg-pr-1'><img src={Inst} alt="" /></div></a>
          <a href="https://twitter.com/" target='_blank'><div className='bg-pr-1'><img src={Twit} alt="" /></div></a>
          <a href="https://vk.com/" target='_blank'><div className='bg-pr-1'><img src={VK} alt="" /></div></a>
        </div>
        <ul className='nav-menu navigation-menu fs-300 txt-drk-b fw-bold' role='list'>
          <li><a className='txt-drk-b' href="#uslugi">Виды услуг</a></li>
          <li><a className='txt-drk-b' href="#about">Обо мне</a></li>
          <li><a className='txt-drk-b' href="#howi">Как я работаю</a></li>
          <li><a className='txt-drk-b' href="#reviews">Отзывы</a></li>
        </ul>
        <div className='footer-license fs-200 txt-gr-2 fw-bold'>
          <p>© 2020 Михельсон</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
