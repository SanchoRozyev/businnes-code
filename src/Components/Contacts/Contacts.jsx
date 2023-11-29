import React from 'react';
import '../../Global-Style.css';
import './Contacts.css';
import Map from '../Assets/map.png'
import Whatsapp from '../Assets/Whatsapp.svg'

const Contacts = () => {
  return (
    <section id='contacts' className='contacts'>
      <div className='cont-map1'><img src={Map} alt="" /></div>
      <div className='contacts-text'>
        <h3>Контакты</h3>
        <p className='fs-300'>+7 987 654-32-10 <br /> <span className='txt-or'>info@mikhelson.ru</span>
          <br /><br />г. Москва, метро “Китай город”,<br />ул. Яузская, дом 15/11</p>
        <div>
          <a href="https://web.whatsapp.com/" target='blank'><button className='fs-200 txt-lgh-tit fw-bold'><img src={Whatsapp} alt="" />Написать в WhatsApp</button></a></div>
      </div>
      <div className='cont-map2'><img src={Map} alt="" /></div>
    </section>
  )
}

export default Contacts
