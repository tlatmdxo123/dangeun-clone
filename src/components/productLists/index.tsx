import React from 'react';
import { ProductInfo } from '../../types';
import ProductItem from '../productItem';
import styled from 'styled-components'
import { useRouter } from 'next/router';

function ProductLists({productDataLists}:{productDataLists:ProductInfo[]}) {
    const router = useRouter();
    return (
        <Container>
            {productDataLists && productDataLists.map((productData,idx) => {
                return (
                    <ItemContainer key={idx} onClick={() => router.push(`/products/${productData._id}`)}>
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
    cursor: pointer;
`

export default ProductLists;