import React, { useState } from 'react';
import Header from '../../components/common/Header';
import { nameMap } from '../../data';
import { useRouter } from 'next/router';
import SelectInput from '../../components/selectInput';
import ProductLists from '../../components/productLists';
import { ProductInfo as ProductInfoType } from '../../types'
import styled from 'styled-components'
import { RoundButton } from '../../components/common/Buttons';
import {MdOutlineAdd} from 'react-icons/md';
import withUser from '../../hoc/withUser';
import {pipe} from '../../utils/pipe'
import withProducts from '../../hoc/withProducts';
import { NextPage } from 'next';
interface Props{
    products:ProductInfoType[]
}

const ProductPage:NextPage<Props> = ({products}) => {
    const [region2,setRegion2] = useState<string[]>([])
    const [addr,setAddr] = useState<string>('')
    const router = useRouter();
    const region1 = Object.keys(nameMap)
    const activeNext = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.options[e.target.selectedIndex].value
        setRegion2(nameMap[selectedValue])
        setAddr('')
        setAddr((state) => state+=selectedValue);
    }

    const setAddress = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.options[e.target.selectedIndex].value
        setAddr((state) => state+=' '+selectedValue);
    }

    

    let isDisabled = region2.length===0;
    return (
        <>
        <Header/>
        <PageContainer>
            <Title>중고거래 인기매물</Title>
            <Filter>
                <SelectInput label='지역을 선택하세요' lists={region1} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => activeNext(e)}/>
                <SelectInput label='지역을 선택하세요' lists={region2} disabled={isDisabled} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setAddress(e)}/>
            </Filter>
            <ProductLists productDataLists={products}/>
            <RoundButton color="#FF8A3D" onClick={() => router.push('/upload')}>
                <MdOutlineAdd />
            </RoundButton>
        </PageContainer>
        </>
    );

}


export const PageContainer = styled.div`
    width: 90%;
    height: 100vh;
    max-width: 980px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 108px;
    display: flex;
    flex-direction: column;
    button{
        position: fixed;
        right: 86px;
        bottom: 64px;
    }
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: medium;
    margin-top: 34px;
    margin-bottom:47px;
`

const Filter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom:56px;
`

const withUserAndProducts = pipe(withUser,withProducts)

export default withUserAndProducts(ProductPage);