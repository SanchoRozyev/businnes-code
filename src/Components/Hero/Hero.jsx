import React from 'react';
import '../../Global-Style.css';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1 className='txt-lgh-tit'>Михельсон <br />Сергей</h1>
        <p className='fs-400 txt-lgh-b'>Ваш юрист по уголовному и <br />гражданскому праву. Более 12 лет <br /> юридической практики.</p>
        <div className='fw-reg'>
          <a href="#call"><button className='price-button fs-300 bg-sec txt-lgh-tit'>Стоимость услуг</button></a>
          <a href="#call"><button className='details-button fs-300 bg-pr-1 txt-or'>Узнать подробности</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
