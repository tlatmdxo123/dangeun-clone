import React from 'react';
import styled from 'styled-components'

type Props = {
    image:string,
    title:string,
    price:number,
    address:string,
    like:number,
    chat:number
}

function ProductItem({image,title,price,address,like,chat}:Props) {
    return (
        <StyledItem>
            <div className='product-image'>
                <img src={image} alt={`${title} image`}/>
            </div>
            
            <div className="product-info">
                <figcaption className='title'>{title}</figcaption>
                <figcaption className='price'>{`${price}원`}</figcaption>
                <figcaption className='address'>{address}</figcaption>
                <figcaption className='sub'>
                    <span>{`관심${like}`}</span>
                    <span>{`채팅${chat}`}</span>
                </figcaption>
            </div>
            
        </StyledItem>
    );
}

const StyledItem = styled.figure`
    width: 201px;
    
    .product-image{
        width: 100%;
        height:201px;
        overflow: hidden;
        text-align: center;
        border-radius: 12px;
        margin-bottom: 12px;
        img{
            width: 100%;
        }
    }
    .title{
        font-size: 16px;
        margin-bottom: 8px;
    }
    .price{
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 6px;
    }
    .address{
        font-size: 13px;
        margin-bottom: 4px;
    }
    .sub{
        font-size: 13px;
        color:${props => props.theme.textColorGray};
        span:first-child{
            margin-right: 10px;
        }
    }

`

export default ProductItem;