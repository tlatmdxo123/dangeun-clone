import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import { redirect } from '../utils/routes';

function withUser<T>(Compoenent:NextPage<T>) {
    
    const hoc:NextPage = (props:any) => <Compoenent {...props}/>

    hoc.getInitialProps = async (ctx:NextPageContext) => {
        const comprops = Compoenent.getInitialProps ? await (Compoenent.getInitialProps(ctx)) : {}
        const session = await getSession(ctx)
        if(!session) return redirect('/auth/signin')

        if(session && session.user){
            const user = await fetch(`http://localhost:3000/api/user/email/${session.user.email}`)
                .then(res => res.json())
            return {...comprops,user}
        }
        
    }
    return hoc
}


export default withUser;