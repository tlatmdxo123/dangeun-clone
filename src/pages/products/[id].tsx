import React from 'react';
import {GetServerSidePropsContext, NextPageContext} from 'next'
import Head from 'next/head'
import { ProductInfo as ProductInfoType } from '../../types'
import UserInfo from '../../components/userInfo';
import styled from 'styled-components'
import { PageContainer } from '../PageContainer';
import ImageSlide from '../../components/imageSlide';
import ProductInfo from '../../components/productInfo';
import ProductLists from '../../components/productLists';
import Header from '../../components/common/Header';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { redirect } from '../../utils/routes';

interface Props{
    productInfo:ProductInfoType,
    user:UserInfo,
    productsInfo:ProductInfoType[]
}


function InfomationPage({productInfo,user,productsInfo}:Props) {
    const router = useRouter();
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
                
                <UserInfo {...user}/>
                <ProductInfo title={productInfo.title} price={productInfo.price} content={productInfo.content} category={productInfo.category} createdAt={productInfo.createdAt} chat={productInfo.chat} like={productInfo.like}/>
                <PopularProductsContainer>
                    <HeaderContainer>
                        <h3 className='title'>당근마켓 인기중고</h3>
                        <MoreButton onClick={() => router.push('/products')}>더 구경하기</MoreButton>
                    </HeaderContainer>
                    
                    <ProductLists productDataLists={productsInfo}/>
                </PopularProductsContainer>
            </Container>
        </>
    );
}

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
    const productId = ctx.query.id;
    const session = await getSession(ctx)
    if(!session) return redirect('/auth/signin')

    if(session && session.user){
        const res = await fetch(`http://localhost:3000/api/user/email/${session.user.email}`)
            .then(res => res.json())

        const productInfo = await fetch(`http://localhost:3000/api/product/${productId}`)
            .then(res => res.json())
        const productsInfo = await fetch(`http://localhost:3000/api/product`)
            .then(res => res.json());

        return {
            props:{user:res,productInfo,productsInfo}
        }
    }
    
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