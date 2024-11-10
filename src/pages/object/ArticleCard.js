import React from 'react';
import '../../style/article.scss';

const ArticleCard = ({ title, describe, labels, date }) => {
    return (
        <div className='card c'>
            <img src='../img/article.png' alt="Article" />
            <div className='item c'>
                <div>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='describe'>
                        {describe}
                    </div>
                </div>
                <div className='labels c'>
                    {labels.map((label, index) => (
                        <label key={index} className='label-item'>
                            {label}
                        </label>
                    ))}
                    <div className='data'>{date}</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
