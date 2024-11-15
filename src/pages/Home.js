import React from 'react';
import Card from './object/Card';
import Footer from './object/Footer';
import Menu from './object/Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import '../style/home.scss';

const Home = () => {
    return (
        <>
            <Menu></Menu>
            <div className='page'>
                <div className='icon'>
                    <div className='img c'><img src='/CenterJob/img/facebook.png' alt='Facebook Icon' /></div>
                    <div className='img c'><img src='/CenterJob/img/youtube.png' alt='YouTube Icon' /></div>
                    <div className='img c'><img src='/CenterJob/img/line.png' alt='Line Icon' /></div>
                </div>
                <Swiper
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next'
                    }}
                    modules={[Navigation]}
                    className="scroll-img"
                >
                    <SwiperSlide>
                        <img className='img' src='/CenterJob/img/page.jpg' alt='Page Slide 1' />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>

                <div className="custom-prev">PREV<img src='/CenterJob/img/paper-plane.png'></img></div>
                <div className="custom-next">NEXT<img src='/CenterJob/img/paper-plane.png'></img></div>
            </div>

            <div className='about c'>
                <div className='img'>
                    <img src='/CenterJob/img/about.png'></img>
                </div>
                <div className='content'>
                    <div className='title'>
                        <h2>關於我們</h2><span>ABOUT US</span>
                    </div>

                    <div className='describe'>希望透過這個平台讓相關單位、技專校院能夠分享辦理的各種活動，藉以發揮技職再造特色，讓大眾了解、認同技職教育並提供相關建議。</div>
                    <div className='btn c'>
                        瞭解更多<img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                    </div>
                </div>
            </div>

            <div className='news c'>
                <div className='title'>
                    <h2>最新消息</h2><span>LATEST NEWS</span>
                </div>
                <div className='content c'>
                    <div className='left c'>
                        <img src='/img/news.png' className='img'></img>
                        <div className='btn-frame c'>
                            <div className='btn c'>
                                瞭解更多<img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                            </div>
                        </div>

                    </div>
                    <div className='right c'>
                        <ul>
                            <li className='c'>
                                <div className='item'>
                                    <div className='title'>
                                        <h2>技職新視界<span className='date'> -- 2024.11.01</span></h2>
                                        <h3>魔法森林的秘密-袖珍鹿角蕨工坊</h3>
                                    </div>
                                    <p>嗨，小夥伴們！是時候踏上一段充滿魔法的旅程啦！ 在我們的袖珍鹿角蕨工坊，你會變成一名真正的魔法師，學會如何讓這些小小的綠色生命變成超酷的磁鐵裝飾！你會發現鹿角蕨的神秘生長過程，並且親自動手，把它們變成你的專屬魔法物品。</p>
                                </div>
                                <div className='img c'>
                                    <img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                                </div>
                            </li>
                            <li className='c'>
                                <div className='item'>
                                    <div className='title'>
                                        <h2>技職新視界<span className='date'> -- 2024.11.01</span></h2>
                                        <h3>魔法森林的秘密-袖珍鹿角蕨工坊</h3>
                                    </div>
                                    <p>嗨，小夥伴們！是時候踏上一段充滿魔法的旅程啦！ 在我們的袖珍鹿角蕨工坊，你會變成一名真正的魔法師，學會如何讓這些小小的綠色生命變成超酷的磁鐵裝飾！你會發現鹿角蕨的神秘生長過程，並且親自動手，把它們變成你的專屬魔法物品。</p>
                                </div>
                                <div className='img c'>
                                    <img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                                </div>
                            </li>
                            <li className='c'>
                                <div className='item'>
                                    <div className='title'>
                                        <h2>技職新視界<span className='date'> -- 2024.11.01</span></h2>
                                        <h3>魔法森林的秘密-袖珍鹿角蕨工坊</h3>
                                    </div>
                                    <p>嗨，小夥伴們！是時候踏上一段充滿魔法的旅程啦！ 在我們的袖珍鹿角蕨工坊，你會變成一名真正的魔法師，學會如何讓這些小小的綠色生命變成超酷的磁鐵裝飾！你會發現鹿角蕨的神秘生長過程，並且親自動手，把它們變成你的專屬魔法物品。</p>
                                </div>
                                <div className='img c'>
                                    <img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='activity c'>
                <div className='content c'>
                    <div className='w100'>
                        <div className='title'>
                            <h2>最新活動</h2><span>LATEST ACTIVITYS</span>
                        </div>
                    </div>
                    <div className='card-row c'>
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                    </div>
                    <div className='card-row c'>
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                        <Card
                            imgSrc='/CenterJob/img/about.png'
                            description='Clicbot程式教育機器人 技術體驗+職業試探體驗課程'
                            time='2024-7-19 ~ 2024-7-19'
                            location='國資圖本館二樓第一會議室'
                            endTime='當天報名'
                        />
                    </div>
                </div>
                <div className='text c'>
                    <h2>LATEST ACTIVITYS</h2>
                </div>
                <div className='more-btn btn c'>
                    瞭解更多<img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                </div>
            </div>
            <div className='introduce c'>
                <div className='text'><h2>VENUE INTRODUCTION</h2></div>
                <div className='content c'>
                    <div className='c'>
                        <div className='title'>
                            <div>
                                <h2>展場介紹</h2><span>VENUE INTRODUCTION</span>
                                <p>展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹展場介紹</p>
                            </div>
                            <div className='more-btn btn c'>
                                瞭解更多<img src='/CenterJob/img/right-arrow.png' className="more_btn"></img>
                            </div>
                        </div>
                        <div className='img'>
                            <img className='img' src='/CenterJob/img/introduce.png'></img>
                        </div>

                    </div>
                    <div className='scroll c'>
                        <div className='separate'>
                            <div className='circle'></div>
                            <div className='line'></div>
                        </div>
                        <div className='swiper-w'>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                slidesPerView={3}
                                spaceBetween={40}
                                navigation={{
                                    prevEl: '.custom-prev',
                                    nextEl: '.custom-next',
                                }}
                                pagination={{
                                    el: '.custom-pagination',
                                    type: 'fraction',
                                    clickable: true,
                                }}
                            >
                                <SwiperSlide className='c'>
                                    <img src="/CenterJob/img/introduce.png" alt="" />
                                    <div className='content c'>
                                        <span>OO區</span>
                                        <p>OO區內容OO區內容OO區內容OO區內容</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='c'>
                                    <img src="/CenterJob/img/introduce.png" alt="" />
                                    <div className='content c'>
                                        <span>O1區</span>
                                        <p>OO區內容OO區內容OO區內容OO區內容</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='c'>
                                    <img src="/CenterJob/img/introduce.png" alt="" />
                                    <div className='content c'>
                                        <span>O2區</span>
                                        <p>OO區內容OO區內容OO區內容OO區內容</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='c'>
                                    <img src="/CenterJob/img/introduce.png" alt="" />
                                    <div className='content c'>
                                        <span>O3區</span>
                                        <p>OO區內容OO區內容OO區內容OO區內容</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='c'>
                                    <img src="/CenterJob/img/introduce.png" alt="" />
                                    <div className='content c'>
                                        <span>O4區</span>
                                        <p>OO區內容OO區內容OO區內容OO區內容</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="custom-prev"><img src='/CenterJob/img/right-arrow.png' alt="Prev" /></div>
                            <div className="custom-next"><img src='/CenterJob/img/right-arrow.png' alt="Next" /></div>
                            <div className="custom-pagination"></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='contact c'>
                <div className='left c'>
                    <h2 className='name'>破風者計畫</h2>
                    <p className='tel'>Tel:09-1234-5678</p>
                    <p className='mail'>Mail:center@gmail.com</p>
                </div>
                <div className='mid c'>
                    <div className='logo c'>
                        <img src='/CenterJob/img/logo.png'></img>
                        <p>指導單位: 教育部</p>
                    </div>
                    <div className='logo c'>
                        <img src='/CenterJob/img/logo.png'></img>
                        <p>指導單位: 教育部</p>
                    </div>
                </div>
                <div className='right c'>
                    <div className='rl c'>
                        <p>
                            協辦單位<br></br>
                            <br></br>
                            國立臺灣科學教育館<br></br>
                            國立公共資訊圖書館<br></br>
                            國立科學工藝博物館<br></br>
                        </p>
                    </div>
                    <div className='rr c'>
                        <p>
                            <br></br>
                            國立臺灣科技大學<br></br>
                            國立虎尾科技大學<br></br>
                            國立高雄科技大學<br></br>
                            國立屏東科技大學<br></br>
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
