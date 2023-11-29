import React from 'react'
import '../../Global-Style.css';
import './FreeCons.css';
import '../script';
import { useState } from 'react';

const FreeCons = () => {
  const [data, setData] = useState({ email: '' })
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email) {
      alert('salk');
    } else {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }
  return (
    <div onSubmit={handleSubmit} className='free-cons txt-lgh-b'>
      <div className='free-cons-back'>
        <h1 className='txt-lgh-tit'>Бесплатная консультация</h1>
        <h4 className='fs-400 fw-reg'>Успейте воспользоваться специальным предложением. Получите первую юридическую консультацию совершенно бесплатно!</h4>
        <div className='time-req-con'>
          <div className='cntdwn-timer'>
            <div>
              <h2 className='txt-lgh-tit day'>21</h2>
              <p className='fs-300'>день</p>
            </div>
            <div>
              <h2 className='txt-lgh-tit hour'>21</h2>
              <p className='fs-300'>часов</p>
            </div>
            <div>
              <h2 className='txt-lgh-tit min'>21</h2>
              <p className='fs-300'>минут</p>
            </div>
            <div>
              <h2 className='txt-lgh-tit sec'>21</h2>
              <p className='fs-300'>секунд</p>
            </div>
          </div>
          <form method='post' className='free-cons-req'>
            <input name='email' className='fs-300' type="email" placeholder='Введите почту' value={data.email} onChange={handleChange} />
            <button type='submit' className='bg-sec txt-lgh-tit fs-300'>Оставить заявку</button>
          </form>
        </div>
      </div>
      {show &&
        <div id='reqConfirmed' className='req-conf fs-400 fw-bold txt-lgh-tit'>Спасибо за вашу заявку<br />
          Мы свяжемся с вами в ближайшее время</div>}
    </div>
  )
}

export default FreeCons
