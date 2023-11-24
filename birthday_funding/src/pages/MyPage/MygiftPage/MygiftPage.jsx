import React from 'react';
import Header from '../../../Layout/Header';
import './MygiftPage.scss';
import Product from '../../../components/Product';
import { request } from "../../../utils/api";

const gift = await request(`/user/gifticon?page=0`, {methods: 'GET'})

const MyPage = () => {
    console.log(gift)
    return (
        <>
        <Header msg={'내 기프티콘'} isMain={false}/>
        <div className='title'>내 기프티콘</div>
        <ul className='gift-container'>
            {gift.data.map(product =>
                <Product id={product.id} 
                name={product.name} 
                price={product.price}
                imageUrl={product.imgUrl}
                dateOfUse={product.dateOfUse}
                isButton={false}/>
            )}
        </ul>
        </>
    );
};

export default MyPage;
