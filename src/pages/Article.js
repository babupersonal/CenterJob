import React from 'react';
import '../style/article.scss';

import Menu from './object/Menu';
import MenuPage from './object/MenuPage';
import ArticleCard from './object/ArticleCard';
import Footer from './object/Footer';

const Article = () => {
    return (
        <div className='w100 article-card'>
            <Menu />
            <MenuPage title="最新文章" />
            <div className='content c'>
                <ArticleCard
                    title = "感性堅韌的金工女孩林靖芳面對困難與挑戰，擦乾眼淚繼續做下去！"
                    describe = "2017年在中東阿布達比舉辦的第44屆國際技能競賽中，林靖芳從分區賽一路到全國賽成為國手後休學一年的苦練，使她在這次國際賽中榮獲「珠寶金銀細工職類-銅牌」。她也和大學同學林宜樺，替007詹姆士龐德設計非致命武器，獲得2019德國iF設計新秀獎，一同獲得教育部第16屆技職之光，一起來細細了解，走過這些奇幻旅程的靖芳吧！"
                    labels={["技職達人特寫", "其他"]}
                    date="2024-11-08"
                 />
                 <ArticleCard
                    title = "感性堅韌的金工女孩林靖芳面對困難與挑戰，擦乾眼淚繼續做下去！"
                    describe = "2017年在中東阿布達比舉辦的第44屆國際技能競賽中，林靖芳從分區賽一路到全國賽成為國手後休學一年的苦練，使她在這次國際賽中榮獲「珠寶金銀細工職類-銅牌」。她也和大學同學林宜樺，替007詹姆士龐德設計非致命武器，獲得2019德國iF設計新秀獎，一同獲得教育部第16屆技職之光，一起來細細了解，走過這些奇幻旅程的靖芳吧！"
                    labels={["技職達人特寫", "其他"]}
                    date="2024-11-08"
                 />
                <ArticleCard
                    title = "感性堅韌的金工女孩林靖芳面對困難與挑戰，擦乾眼淚繼續做下去！"
                    describe = "2017年在中東阿布達比舉辦的第44屆國際技能競賽中，林靖芳從分區賽一路到全國賽成為國手後休學一年的苦練，使她在這次國際賽中榮獲「珠寶金銀細工職類-銅牌」。她也和大學同學林宜樺，替007詹姆士龐德設計非致命武器，獲得2019德國iF設計新秀獎，一同獲得教育部第16屆技職之光，一起來細細了解，走過這些奇幻旅程的靖芳吧！"
                    labels={["技職達人特寫", "其他"]}
                    date="2024-11-08"
                 />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Article;
