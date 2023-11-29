import React, { useState } from 'react'
import '../../Global-Style.css';
import './About.css'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'
import image4 from '../Assets/image4.png'

const About = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '' })
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      alert('Ваша заявка не закончена, пожалуйста заполните все пробелы');
    } else {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }
  return (
    <section id='about' className='about'>
      <div className='about-text'>
        <div className='about-text-grid'>
          <h1>12 лет частной практики</h1>
          <p className='fs-300 fw-bold'>Юристы компании «Юридическое Бюро 812» уже долгие годы ведут успешную практику в предоставлении услуг физическим и юридическим лицам в различных правовых сферах, решая вопросы любой сложности. Наши специалисты осуществляют представительство в государственных органах и обеспечивают защиту интересов в суде. Мы определяем перспективы уже на первичной консультации!
            <br /><br />
            Наши юристы имеют большой опыт по представлению интересов структур малого и среднего бизнеса в различных правовых вопросах, возникающих в процессе их деятельности. Наши адвокаты и юристы представляют интересы доверителей в Арбитражном суде Санкт-Петербурга и ЛО, в государственных органах и учреждениях, а также осуществляют комплексное абонентское обслуживание по вопросам любой сложности.</p>
        </div>
      </div>

      <div className='about-img bg-pr-2'>
        <div className='about-img-grid'>
          <div>
            <img src={image2} alt="" />
          </div>
          <div className='about-img-double'>
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
      </div>

      <section id='call' onSubmit={handleSubmit} className='about-contact'>
        <h2 className='txt-lgh-tit'>Свяжитесь со мной</h2>
        <p className='fs-300 txt-lgh-b'>Окажу вам экспертную консультацию, вникну в суть вашей проблемы и подготовлю оптимальный плане решения поставленной задачи</p>
        <form method='post' className='fs-300 about-contact-grid'>
          <input className='leave-req-name' type="text" name='name' placeholder='Вашe имя' onChange={handleChange} value={data.name} />
          <input className='leave-req-phone' type="phone" name='phone' placeholder='+7 (000) 000-0000' onChange={handleChange} value={data.phone} />
          <input type="email" name='email' placeholder='E-mail' onChange={handleChange} value={data.email} />
          <div className='ab-btn-con'>
            <button type='submit' className='bg-sec txt-lgh-tit'>Оставить заявку</button></div>
        </form>
        {show ?
          <div id='reqConfirmed' className='req-conf fs-400 fw-bold txt-lgh-tit'>Спасибо за вашу заявку {data.name}. <br />
            Мы свяжемся с вами в ближайшее время</div> : null}
      </section>
    </section>
  )
}

export default About
