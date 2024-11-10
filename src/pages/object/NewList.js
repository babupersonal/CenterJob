import React from 'react';
import '../../style/news.scss';

const NewList = ({ img, describe, label, date }) => {
  return (
    <div className='item c'>
        <img src={img} ></img>
        <div className='describe'>{describe}</div>
        <div className='right c'>
            <label className='c'>{label}</label>
            <div className='date'>{date}</div>
        </div>
    </div>
  )
}
export default NewList;
