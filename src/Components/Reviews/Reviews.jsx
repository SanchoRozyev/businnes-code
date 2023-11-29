import React from 'react'
import '../../Global-Style.css';
import './Reviews.css';
import Ellipse1 from '../Assets/Ellipse 1.svg'
import Ellipse2 from '../Assets/Ellipse 2.svg'
import Ellipse3 from '../Assets/Ellipse 3.svg'

const Reviews = () => {
  return (
    <section id='reviews' className='reviews bg-pr-2'>
      <h1>Отзывы</h1>
      <h4 className='fs-400'>Спасибо всем, кто оставил отзыв о нашей совместной работе</h4>
      <div className='review-grid'>
        <div className='review-grid-ch bg-pr-1'>
          <div className='reviewer-img-c'><img src={Ellipse1} alt="" /></div>
          <p className='review-text fs-400 fw-bold'>Спасибо, что помогли мне избежать административного ареста, за то, чего я не совершал</p>
          <p className='reviewer-name fs-300 fw-bold'>Юрий Ставничий</p>
          <p className='reviewer-place fs-100 txt-gr-2'>г. Санкт-Петербург</p>
        </div>
        <div className='review-grid-ch bg-pr-1'>
          <div className='reviewer-img-c'><img src={Ellipse2} alt="" /></div>
          <p className='review-text fs-400 fw-bold'>Спасибо Сергею Израилевичу, что помог мне с брако-разводным процессом. Теперь я свободна и открыта для новых знакомств</p>
          <p className='reviewer-name fs-300 fw-bold'>Александра Селезнева</p>
          <p className='reviewer-place fs-100 txt-gr-2'>г. Москва</p>
        </div>
        <div className='review-grid-ch bg-pr-1'>
          <div className='reviewer-img-c'><img src={Ellipse3} alt="" /></div>
          <p className='review-text fs-400 fw-bold'>Спасибо за помощь и представительство в суде по делу с шумным соседом. Положительное решение и компенсация!</p>
          <p className='reviewer-name fs-300 fw-bold'>Ксения Собчак</p>
          <p className='reviewer-place fs-100 txt-gr-2'>Дом-2</p>
        </div>
      </div>
    </section>
  )
}

export default Reviews
