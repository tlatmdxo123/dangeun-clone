import React from 'react';
import {getSession} from 'next-auth/client'
import {Session} from 'next-auth'
import {GetServerSidePropsContext} from 'next'
import { User } from '../../store/user/types';
import { redirect } from '../../utils/routes';

function ProductPage({user}:{user:User}) {
  
    return (
        <div>
            {user.name}
        </div>
    );
}

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

export default ProductPage;