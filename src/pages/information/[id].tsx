import React from 'react';
import {NextPageContext} from 'next'
import Head from 'next/head'
import { ProductInfo as ProductInfoType } from '../../types'
import UserInfo from '../../components/userInfo';
import styled from 'styled-components'
import { PageContainer } from '../PageContainer';
import ImageSlide from '../../components/imageSlide';
import ProductInfo from '../../components/productInfo';
import ProductLists from '../../components/productLists';
import Header from '../../components/common/Header';

interface Props{
    productInfo:ProductInfoType,
    userData:UserInfo,
    productDataLists:ProductInfoType[]
}


function InfomationPage({productInfo,userData,productDataLists}:Props) {
    return (
        <>
            <Head>
                <title>Dangeun Clone Page</title>
                <meta name="description" content="Dangeun Clone Page" />
            </Head>
            <Header/>
            <Container>
                <SlideContainer>
                    <ImageSlide imageLists={productInfo.images} title={productInfo.title}/>
                </SlideContainer>
                
                <UserInfo {...userData}/>
                <ProductInfo title={productInfo.title} price={productInfo.price} content={productInfo.content} category={productInfo.category} createdAt={productInfo.createdAt} chat={productInfo.chat} like={productInfo.like}/>
                <PopularProductsContainer>
                    <HeaderContainer>
                        <h3 className='title'>당근마켓 인기중고</h3>
                        <MoreButton>더 구경하기</MoreButton>
                    </HeaderContainer>
                    
                    <ProductLists productDataLists={productDataLists}/>
                </PopularProductsContainer>
            </Container>
        </>
    );
}

InfomationPage.getInitialProps = async ({query}:NextPageContext) => {
    const productId = query.id
    const productInfo:ProductInfoType = {
        _id:'avf',
        userId:'sdfasdf',
        content:"원가 370,000 사용 1년 미만 깨끗하게 사용했습니다~",
        createdAt:new Date(),
        images:Array.from({length:10}).map((_) => "https://dnvefa72aowie.cloudfront.net/origin/article/202110/8B65A551506A9E9B9412357C3E32BBE6FF09C8BF9FBD132F59AF7DCC85632085.jpg?q=82&s=300x300&t=crop"),
        title: "삼성 냉장고",
        address: "서울 강북구 번3동",
        category:'가전제품',
        price:180000,
        like: 4,
        chat: 2,
    }
    const userInfo:UserInfo = {
        _id:'sdfasdf',
        name:'심승태',
        address:"강북구 번3동",
        profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
    }
    const productDataLists = Array.from({length:10}).map((_) => productInfo)

    return {productInfo,userData:userInfo,productDataLists}
}

const Container = styled(PageContainer)`
    position: relative;
`

const SlideContainer = styled.div`
    width: 100%;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding:11px 0;
    margin-bottom: 20px;
    margin-top: 17px;
    .title{
        font-size: 18px;
        font-weight: bold;
    }
    
`

const PopularProductsContainer = styled.div`
    width: 100%;
`

const MoreButton = styled.button`
    cursor: pointer;
    color:${props => props.theme.primary}
`


export default InfomationPage;