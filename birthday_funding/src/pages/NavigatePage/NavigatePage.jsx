import React from 'react';
import Header from '../../Layout/Header';
import Linkpage from '../../components/linkPage'
import './NavigatePage.scss';

const NavigatePage = () => {
    return (
        <>
             <Header msg={''} isMain={false} />
             <ul className='navigate-container'>
                <Linkpage msg={'친구 목록'} url="#"/>
                <Linkpage msg={'기프티콘 상점'} url="#"/>
                <Linkpage msg={'내 펀딩'} url="#"/>
                <Linkpage msg={'마이페이지'} url="#"/>
             </ul>
        </>
    );
};

export default NavigatePage;
