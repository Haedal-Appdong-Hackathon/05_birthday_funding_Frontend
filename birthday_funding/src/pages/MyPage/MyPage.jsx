import React from 'react';
import Header from '../../Layout/Header';
import Linkpage from '../../components/linkPage';
import './MyPage.scss';
import { request } from "../../utils/api";

const user1 = {
	"id" : 1,
	"name" : "홍길동",
	"birthday" : "2000-01-01",
	"nickname" : "미정",
	"point" : 150000,
	"userImageUrl" : "../../public/images/intro/gift-box.png",
}
const user = await request(`/user`, {methods: 'GET'})

const MyPage = () => {
    return (
        <>
        <Header msg={'마이페이지'} isMain={false}/>
        <div className='mypage-container'>
            <div className='mypage-user'>
                <img src={user.userImageUrl}/>
                <div>{user.name}</div>
                <div className='mypage-birthday'>{user.birthday}</div>
            </div>
            <a className='mypage-point'>
                <div className='mypage-pointname'>보유 포인트 </div>
                <div>{user.point}</div>
            </a>
        </div>
        <ul className='navigate-container'>
            <Linkpage msg={'내 펀딩'} url="#"/>
            <Linkpage msg={'내가 참여한 펀딩'} url="#"/>
            <Linkpage msg={'기프티콘'} url="#"/>
        </ul>
        </>
    );
};

export default MyPage;
