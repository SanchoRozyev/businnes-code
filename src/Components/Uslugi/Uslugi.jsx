import React from 'react'
import '../../Global-Style.css';
import './Uslugi.css'

const Uslugi = () => {
  return (
    <section id='uslugi' className='uslugi bg-pr-2'>
      <h3 className='txt-or'>Юридические услуги</h3>
      <h1>Представляю ваши <br /> интересы</h1>
      <p className='fs-400'>Обратитесь ко мне, в любой жизненной ситуации. <br />Вместе - мы справимся с любой задачей.</p>
      <div className='uslugi-grid'>
        <div className='uslugi-card1'>
          <h3 className='txt-lgh-tit'>Семейное право</h3>
          <p className='fs-300 txt-lgh-b'>Разводы, брачные контакты. Вместе мы найдём выход</p>
        </div>
        <div className='uslugi-card2'>
          <h3 className='txt-lgh-tit'>Уголовное право</h3>
          <p className='fs-300 txt-lgh-b'>Возьму в работу ваш случай на любом этапе производства</p>
        </div>
        <div className='uslugi-card3'>
          <h3 className='txt-lgh-tit'>Арбитражный суд</h3>
          <p className='fs-300 txt-lgh-b'>Представительство в арбитражном суде.</p>
        </div>
      </div>
    </section>
  )
}

export default Uslugi
