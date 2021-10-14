import React from 'react';
import styled from 'styled-components'
import { numToLocalString } from '../../utils/number';
import { timeFromNow } from '../../utils/time';

type Info = {
    title:string,
    price:number,
    content:string,
    category:string,
    createdAt:Date,
    like:number,
    chat:number
}

function ProductInfo({title,price,content,category,createdAt,like,chat}:Info) {
    const curDate = new Date(createdAt)
    const fromNow = timeFromNow(curDate)
    return (
        <ProductInfoContainer>
            <div className="header">
                <h3 className='title'>{title}</h3>
                <span>{category} {fromNow}</span>
                <strong>{numToLocalString(price)}원</strong>
            </div>
            <p className="content">{content}</p>
            <div className="sub">
                <span>관심 {like}</span>
                <span>채팅 {chat}</span>
            </div>
            

        </ProductInfoContainer>
    );
}

const ProductInfoContainer = styled.div`
    width: 100%;
    padding: 28px 0;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    .header{
        margin-bottom: 10px;
        span{
            display: block;
            margin-bottom: 10px;
        }
        strong{
            display: block;
            font-size: 18px;
            font-weight: bold;
        }
    }
    span{
        font-size: 13px;
        color:${props => props.theme.textColorLight};
    }
    .title{
        font-size: 20px;
        margin-bottom: 8px;
    }
   
    .content{
        padding: 10px 0;
        font-size: 17px;
    }
    .sub{
        span{
            margin-right: 4px;
        }
    }

`


export default ProductInfo;