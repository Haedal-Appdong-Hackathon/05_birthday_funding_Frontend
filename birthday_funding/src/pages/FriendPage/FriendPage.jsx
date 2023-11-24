import React from 'react';
import Header from '../../Layout/Header';
import './FriendPage.scss';

const friend = [
    {
        "id" : 1,
		"birthday" : "2000-01-01",
		"nickname" : "미정",
		"userImageUrl" : "../../public/images/intro/gift-box.png",
        "fundingId" : 1
    },
    {
        "id" : 2,
		"birthday" : "2000-01-01",
		"nickname" : "승민",
		"userImageUrl" : "../../public/images/intro/gift-box.png",
        "fundingId" : null
    },
    {
        "id" : 3,
		"birthday" : "2000-01-01",
		"nickname" : "홍석",
		"userImageUrl" : "../../public/images/intro/gift-box.png",
        "fundingId" : 2
    },
    {
        "id" : 4,
		"birthday" : "2000-01-01",
		"nickname" : "재현",
		"userImageUrl" : "../../public/images/intro/gift-box.png",
        "fundingId" : null
    },
    {
        "id" : 5,
		"birthday" : "2000-01-01",
		"nickname" : "강민",
		"userImageUrl" : "../../public/images/intro/gift-box.png",
        "fundingId" : null
    }
]

const FriendPage = () => {
    return (
        <>
            <Header msg={'친구 목록'} isMain={false}/>
            <div className='friend-title'>펀딩 진행 중인 친구</div>
            <ul className='ul-funding-friend'>
                {friend.filter((friend) => friend.fundingId !== null)
                .map(fundingFriend => 
                    <li id={fundingFriend.id} className="funding-friend-container">
                        <a href={fundingFriend.fundingId}>
                            <img className='friend-img' src={fundingFriend.userImageUrl} />
                            <div className="friend-name">{fundingFriend.nickname}</div>
                        </a>
                    </li>
                )}
                
            </ul>
            <div className='friend-title'>친구 목록</div>
            <ul className='ul-friend'>
                {friend.map(friend =>
                    <li id={friend.id} className="friend-container">
                        <img className='friend-img' src={friend.userImageUrl} />
                        <div className="friend-name">{friend.nickname}</div>
                    </li>
                )}
                
            </ul>
        </>
    );
};

export default FriendPage;
