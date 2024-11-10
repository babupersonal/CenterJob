import React from 'react';
import Menu  from './object/Menu';
import MenuPage from './object/MenuPage';
import Footer from './object/Footer';
import NewList from './object/NewList';
import '../style/news.scss';

const News = () => {
  return (
    <div className='news'>
      <Menu></Menu>
      <MenuPage title="最新消息" />
      <div className='new-list c'>
        <NewList 
          img = "../img/news.jpg"
          describe = "最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走!!!!!!"
          label = "教育"
          date = "2024-11-8"
        />
        <NewList 
          img = "../img/news.jpg"
          describe = "最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走!!!!!!"
          label = "教育"
          date = "2024-11-8"
        />
        <NewList 
          img = "../img/news.jpg"
          describe = "最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走最新消息誰家企鵝離家出走!!!!!!"
          label = "教育"
          date = "2024-11-8"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}
export default News;
