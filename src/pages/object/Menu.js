import React from 'react';
import '../../style/object/Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/"><h1 className="menu-title">My Website</h1></Link>
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/about">關於我們</Link>
                </li>
                <li className="menu-item">
                    最新資訊
                    <ul className="dropdown">
                        <Link to="/article"><li className="dropdown-item">最新文章</li></Link>
                        <Link to="/news"><li className="dropdown-item">最新消息</li></Link>
                        <Link to="/videos"><li className="dropdown-item">最新影音</li></Link>
                    </ul>
                </li>
                <li className="menu-item">
                    展場介紹
                    <ul className="dropdown">
                        <Link to="/information"><li className="dropdown-item">展場資訊</li></Link>
                        <Link to="/evenReg"><li className="dropdown-item">活動報名</li></Link>
                        <Link to="/evenHigh"><li className="dropdown-item">活動剪影</li></Link>
                    </ul>
                </li>
                <li className="menu-item">
                    入學管道
                    <ul className="dropdown">
                        <Link to="/edu1"><li className="dropdown-item">升學技高</li></Link>
                        <Link to="/edu2"><li className="dropdown-item">升學五專</li></Link>
                        <Link to="/edu3"><li className="dropdown-item">升學四技＆二專</li></Link>
                    </ul>
                </li>
                <Link to="/videos"><li className="menu-item">虛擬展場</li></Link>
                <Link to="/game"><li className="menu-item">互動遊戲體驗</li></Link>
                <li className="menu-item">
                    聯絡我們
                    <ul className="dropdown">
                        <Link to="/videos"><li className="dropdown-item">Facebook</li></Link>
                        <Link to="/videos"><li className="dropdown-item">YouTube</li></Link>
                        <Link to="/videos"><li className="dropdown-item">Line</li></Link>
                    </ul>
                </li>
            </ul>
            <div className="logo c">加入/登入會員</div>
        </div>
    );
};

export default Menu;
