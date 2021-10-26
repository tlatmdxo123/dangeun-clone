import React, { useState,useContext } from 'react';
import styled from 'styled-components'
import Head from 'next/head'
import PhotoInput from '../../components/photoInput';
import TextField from '../../components/textField';
import PriceInput from '../../components/underlineInput/PriceInput';
import SelectInput from '../../components/underlineInput/SelectInput';
import TitleInput from '../../components/underlineInput/TitleInput';
import { PRODUCT_CATEGORY } from '../../constants';
import Header from '../../components/common/Header';
import SubmitBar from '../../components/submitBar';
import { PageContainer } from '../PageContainer';
import axios from 'axios'
import { User } from '../../store/user/types';
import { getSession } from 'next-auth/client';
import { redirect } from '../../utils/routes';
import { GetServerSidePropsContext } from 'next';

function UploadPage({user}:{user:User}) {
    const [imageLists,setImageLists] = useState<string[]>([])
    const place = '송산1동'
    const upload = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        data.append('userId',user._id)
        data.append('address',user.addr as string)
        await axios.post('/api/product',data,{headers:{
            "Content-Type": "multipart/form-data; boundary='Boundary'"
        }});
    }

    const preview = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files as FileList);
        files.forEach((_,idx)=> {
            const reader = new FileReader();
            reader.readAsDataURL(files[idx]);
            reader.onload = (evt:ProgressEvent<FileReader>) => {
                const loaded = (evt.target as FileReader).result as string

                setImageLists((state) => files.length === 10 ? [...state.slice(1),loaded] : [...state,loaded]);
            }
        })
        
    }

    const removeFile = (target:number) => {
        const dt = new DataTransfer()
        const inputEl = document.querySelector<HTMLInputElement>('.image_input');
        const files = (inputEl as HTMLInputElement).files as FileList;
        Array.from({length:files.length}).forEach((_,idx) => {
            if(idx!==target){
                dt.items.add(files[idx]);
            }
        });
        (inputEl as HTMLInputElement).files = dt.files
        setImageLists(state => state.filter((v,i) => i!==target));
        
    }
    return (
        <>
        <Head>
          <title>Product Upload Page</title>
          <meta name="description" content="Product Upload Page" />
        </Head>
        <Header/>
        <Container>
            <UploadForm onSubmit={(e:React.FormEvent<HTMLFormElement>) => upload(e)}>
                <PhotoInput name='images' imageLists={imageLists} onChange={preview} removeFile={removeFile}/>
                <TitleInput placeholder='글 제목' name='title'/>
                <SelectInput selectLists={PRODUCT_CATEGORY} name='category'/>
                <PriceInput placeholder='가격(선택사항)' name='price'/>
                <TextField name='content' placeholder={`${place}에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}/>
                <SubmitBar/>
            </UploadForm>
            
        </Container>
        </>
    );
}

const Container = styled(PageContainer)`
    
`

const UploadForm = styled.form`
    width: 100%;
    .textarea{
        flex-grow: 1;
    }
    .submit-bar{
        position: fixed;
        left: 0;
        bottom: 0;
    }
`

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
    const session = await getSession(ctx)
    if(!session) return redirect('/auth/signin')

    if(session && session.user){
        const res = await fetch(`http://localhost:3000/api/user/email/${session.user.email}`)
            .then(res => res.json())

        if(!res.addr) return redirect('/user/set-address')

        return {
            props:{session,user:res}
        }
    }
}
export default UploadPage;