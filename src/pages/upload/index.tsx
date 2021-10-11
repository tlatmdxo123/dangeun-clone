import React from 'react';
import styled from 'styled-components'
import Head from 'next/head'
import PhotoInput from '../../components/photoInput';
import TextField from '../../components/textField';
import PriceInput from '../../components/underlineInput/PriceInput';
import SelectInput from '../../components/underlineInput/SelectInput';
import TitleInput from '../../components/underlineInput/TitleInput';
import { PRODUCT_CATEGORY } from '../../constants';
import Header from '../../components/common/Header';

function UploadPage() {
    const place = '송산1동'
    return (
        <>
        <Head>
          <title>Dangeun Clone Page</title>
          <meta name="description" content="Dangeun Clone Page" />
        </Head>
        <Header/>
        <Container>
            <PhotoInput/>
            <TitleInput placeholder='글 제목'/>
            <SelectInput selectLists={PRODUCT_CATEGORY}/>
            <PriceInput placeholder='가격(선택사항)'/>
            <TextField name='product-description' placeholder={`${place}에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}/>
        </Container>
        </>
    );
}

const Container = styled.div`
    width: 90%;
    height: 100vh;
    max-width: 677px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 108px;
    display: flex;
    flex-direction: column;
    .textarea{
        flex-grow: 1;
    }
`
export default UploadPage;