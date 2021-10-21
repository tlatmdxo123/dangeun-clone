import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectInput from '../../components/selectInput';
import {nameMap} from '../../data'
import { User } from '../../store/user/types';
import { redirect } from '../../utils/routes';

function SetAddress({user}:{user:User}) {
    const [region2,setRegion2] = useState<string[]>([])
    const [addr,setAddr] = useState<string>('')
    const region1 = Object.keys(nameMap)
    const router = useRouter()

    let isDisabled = region2.length===0;

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
    
    const setUserAddress = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`/api/user/${user._id}`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({addr})
            }
        ).then(res => res.json())
        .then(res => {
            res.acknowledged && router.push('/products')
        })
    }
    return (
        <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => setUserAddress(e)}>
            <label htmlFor='address'>address</label>
            <SelectInput label='지역을 선택하세요' lists={region1} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => activeNext(e)}/>
            <SelectInput label='지역을 선택하세요' lists={region2} disabled={isDisabled} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setAddress(e)}/>
            <button type='submit'>주소 설정하기</button>
        </form>
    );
}

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
    const session = await getSession(ctx)
    if(!session) return redirect('/auth/signin')

    if(session && session.user){
        const res = await fetch(`http://localhost:3000/api/user/email/${session.user.email}`)
            .then(res => res.json())
        if(res.addr) return redirect('/products')
        return {
            props:{session,user:res}
        }
    }
    
}

export default SetAddress;