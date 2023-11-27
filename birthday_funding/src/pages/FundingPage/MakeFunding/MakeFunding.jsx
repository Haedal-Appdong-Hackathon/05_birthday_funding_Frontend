import React from 'react';
import Header from '../../../Layout/Header';
import './MakeFunding.scss';

const MakeFunding = () => {
    return (
        <>
            <Header msg={'펀딩 만들기'} isMain={false} />
            <div className="makefunding-container">
                <div className="name-item">
                    <h2>펀딩 이름</h2>
                    <input type="text" placeholder="센스있는 이름으로 특별한 펀딩을 만들어 보아요." />
                </div>
                <div className="contents-item">
                    <h2>펀딩 내용</h2>
                    <input type="text" placeholder="이 편딩을 진행하는 이유는 무엇인가요?" />
                </div>
                <div className="gift-item">
                    <h2>펀딩할 선물</h2>
                    <input type="text" />
                </div>
                <div className="money-item">
                    <h2>펀딩 금액</h2>
                    <input type="text" />
                </div>
                <div className="period-item">
                    <h2>펀딩 진행기간</h2>
                    <input type="text" />
                </div>
            </div>
        </>
    );
};

export default MakeFunding;
