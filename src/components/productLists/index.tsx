import React from 'react';
import { ProductInfo } from '../../types';
import ProductItem from '../productItem';
import UserInfo from '../userInfo';
import styled from 'styled-components'

function ProductLists({productDataLists}:{productDataLists:ProductInfo[]}) {
    const userInfo:UserInfo = {
        _id:'sdfasdf',
        name:'심승태',
        address:"강북구 번3동",
        profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
    }
    return (
        <Container>
            {productDataLists.map((productData,idx) => {
                return (
                    <ItemContainer key={idx} >
                        <ProductItem image={productData.images[0]} title={productData.title} price={productData.price} address={userInfo.address} chat={productData.chat} like={productData.like}/>
                    </ItemContainer>
                )
            })}
            
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ItemContainer = styled.li`
    margin-bottom: 50px;
`

export default ProductLists;