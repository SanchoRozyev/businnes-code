import React from 'react'
import '../../Global-Style.css';
import './HowI.css';
import Vector19 from '../Assets/Vector 19.svg'

const HowI = () => {
  return (
    <section id='howi' className='howi'>
      <h1>Как я работаю?</h1>
      <h3 className='fs-400 fw-reg'>Внимательно ознакомьтесь с этапами работ и выберите для себя самое полезное и интересное</h3>
      <div className='howi-grid'>
        <div className='howi-l'>
          <h4 className='fs-400 fw-bold'>Вникаю в суть дела</h4>
          <p className='fs-300'>Провожу с клиентом подробное собеседование, на котором выясняем все детали и обстоятельства</p>
        </div>
        <div className='txt-or fs-400 howi-num-vec'>
          <div className='howi-num-rec'>1</div>
          <img src={Vector19} alt="" />
        </div>
        <div></div>
        <div></div>
        <div className='txt-or fs-400 howi-num-vec'>
          <div className='howi-num-rec'>2</div>
          <img src={Vector19} alt="" />
        </div>
        <div className='howi-r'>
          <h4 className='fs-400 fw-bold'>Предлагаю стратегии</h4>
          <p className='fs-300'>На основании полученной от клиента информации, готовлю различные варианты действий и согласовываю их с клиентом</p>
        </div>
        <div className='howi-l'>
          <h4 className='fs-400 fw-bold'>Начинаю работу</h4>
          <p className='fs-300'>После согласования с клиентом стратегии - начинаю активную работу над делом, довожу до результата</p>
        </div>
        <div className='txt-or fs-400 howi-num-vec'>
          <div className='howi-num-rec'>3</div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default HowI
