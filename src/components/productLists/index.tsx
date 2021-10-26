import React from 'react';
import { ProductInfo } from '../../types';
import ProductItem from '../productItem';
import styled from 'styled-components'
import { User } from '../../store/user/types';

function ProductLists({user,productDataLists}:{user:User,productDataLists:ProductInfo[]}) {
    return (
        <Container>
            {productDataLists && productDataLists.map((productData,idx) => {
                return (
                    <ItemContainer key={idx} >
                        <ProductItem image={productData.images[0]} title={productData.title} price={productData.price} address={productData.address} chat={productData.chat} like={productData.like}/>
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