import React, { useEffect, useState } from 'react';
import {GetServerSidePropsContext} from 'next'
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
import axios from 'axios'

interface Props{
    productInfo:ProductInfoType,
    user:UserInfo,
    productsInfo:ProductInfoType[]
}


function InfomationPage({productInfo,productsInfo}:Props) {
    const [user,setUser] = useState<UserInfo>();
    const router = useRouter();

    const fetchUser = async () => {
        const user = await axios.get(`/api/user/${productInfo.userId}`)
        
        setUser(user.data);
    }

    useEffect(() => {
        fetchUser();
    },[productInfo.userId])
    
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
                
                {user && <UserInfo name={user.name} address={user.address} image={user.image}/>}
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

        const productInfo = await fetch(`http://localhost:3000/api/product/${productId}`)
            .then(res => res.json())
        const productsInfo = await fetch(`http://localhost:3000/api/product`)
            .then(res => res.json());

        return {
            props:{productInfo,productsInfo}
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