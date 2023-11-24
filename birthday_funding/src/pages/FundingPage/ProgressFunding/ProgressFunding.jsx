import React from 'react';
import Header from '../../../Layout/Header';
import './ProgressFunding.scss'

const funding = {
	"id" : 1,
	"title" : "펀딩제목",
	"startDate" : "2023-11-1",
	"endDate" : "2023-11-15",
	"progress" : 80.0,
	"writer" : {
		"id" : 1,
		"birthday" : "2000-01-01",
		"nickname" : "도비민민",
		"userImageUrl" : "aa.xxx.png"
	},


	"content" : "에어팟을 주세요",
	"currentMoney" : 8000,
	"wishList" : [
		{
			"id" : 1,
			"name" : "에어팟",
			"brand" : "스타벅스",
			"price" : 10000,
			"imageUrl" : "../../../public/images/intro/gift-box.png",
		}
	]

}

const ProgressFunding = () => {
    console.log(funding)
    return (
        <>
            <Header msg={'펀딩하기'} isMain={false}/>
            <div className='funding-container'>
                <div className='funding-day'>{funding.endDate} 까지</div>
                <img className='funding-img' src={funding.wishList[0].imageUrl}/>
                <div className='funding-progress'>
                    <div>{funding.progress}%</div>
                    <progress value={funding.progress} max="100"></progress>
                </div>
                <div className='funding-title'>{funding.title}</div>
                <div className='funding-user-name'>{funding.writer.nickname}의 펀딩</div>
                <div className='funding-content'>{funding.content}</div>
            </div>
            <button className='pink-button margin'>펀딩 끝내기</button>
            <button className='pink-button'>펀딩 정산하기</button>
        </>
    );
};

export default ProgressFunding;
