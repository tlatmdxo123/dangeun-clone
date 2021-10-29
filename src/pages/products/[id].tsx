import React, { useEffect, useState } from 'react';
import { NextPage} from 'next'
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
import axios from 'axios'
import { pipe } from '../../utils/pipe';
import withUser from '../../hoc/withUser';
import withProducts from '../../hoc/withProducts';
import withProduct from '../../hoc/withProduct';

interface Props{
    product:ProductInfoType,
    products:ProductInfoType[]
}
const InfomationPage:NextPage<Props> = ({product,products}) => {
    const [user,setUser] = useState<UserInfo>();
    const router = useRouter();

    const fetchUser = async () => {
        const user = await axios.get(`/api/user/${product.userId}`)
        
        setUser(user.data);
    }

    useEffect(() => {
        fetchUser();
    },[product.userId])
    
    return (
        <>
            <Head>
                <title>Dangeun Clone Page</title>
                <meta name="description" content="Dangeun Clone Page" />
            </Head>
            <Header/>
            <Container>
                <SlideContainer>
                    <ImageSlide imageLists={product.images} title={product.title}/>
                </SlideContainer>
                
                {user && <UserInfo name={user.name} address={user.address} image={user.image}/>}
                <ProductInfo title={product.title} price={product.price} content={product.content} category={product.category} createdAt={product.createdAt} chat={product.chat} like={product.like}/>
                <PopularProductsContainer>
                    <HeaderContainer>
                        <h3 className='title'>당근마켓 인기중고</h3>
                        <MoreButton onClick={() => router.push('/products')}>더 구경하기</MoreButton>
                    </HeaderContainer>
                    
                    <ProductLists productDataLists={products}/>
                </PopularProductsContainer>
            </Container>
        </>
    )
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
    color:${props => props.theme.primary};
`

const withUserAndProductsAndProduct = pipe(withUser,withProducts,withProduct)

export default withUserAndProductsAndProduct(InfomationPage);