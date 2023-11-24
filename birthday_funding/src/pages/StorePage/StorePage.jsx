import React from 'react';
import Header from '../../Layout/Header';
import Product from '../../components/Product'
import './StorePage.scss';

const User = {
    "id" : 1,
	"name" : "홍길동",
	"birthday" : "2000-01-01",
	"nickname" : "미정",
	"point" : 150000,
	"userImageUrl" : "aa.xxx.png"
}

const product = [
    {
        "hasNext" : false,
	    "data" : [
            {
                "id" : 1,
                "category": "CAFE",
                "name" : "에어팟",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            },
            {
                "id" : 2,
                "category": "CAFE",
                "name" : "하",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            },
            {
                "id" : 3,
                "category": "CHICKEN",
                "name" : "에어팟",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            },
            {
                "id" : 4,
                "category": "CAFE",
                "name" : "에어팟",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            },
            {
                "id" : 5,
                "category": "CHICKEN",
                "name" : "에어팟",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            },
            {
                "id" : 6,
                "name" : "에어팟",
                "category": "CHICKEN",
                "price" : 10000,
                "brand" : "스타벅스",
                "imageUrl" : "../../public/images/intro/gift-box.png"
            }
        ]
    }
]

const StorePage = () => {
    return (
        <>
            <Header msg={'기프티콘 상점'} isMain={false}/>
            <div className='point-container'>
                <div className='point-name'>내 포인트 : {User.point}</div>
                <button className='pink-button'>충전하기</button>
            </div>
            <div className='title'>상품 카테고리 분류</div>
            <ul className='ul-category'>
                <li className='li-category'><button className='category-button'>전체</button></li>
                <li className='li-category'><button className='category-button'>카페</button></li>
                <li className='li-category'><button className='category-button'>치킨</button></li>
            </ul>
            <div className='title'>상품 목록</div>
            <ul className='ul-product'>
                {product[0].data.map(product => 
                    <Product id={product.id} 
                        name={product.name} 
                        price={product.price}
                        imageUrl={product.imageUrl}
                        dateOfUse={1}
                        isButton={false}/>
                )}
            </ul>
        </>
    );
};

export default StorePage;
