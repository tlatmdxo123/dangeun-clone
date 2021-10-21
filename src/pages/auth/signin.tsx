import React, { useEffect } from 'react';
import {useSession,signIn} from 'next-auth/client'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import SocialButton from '../../components/socialButtons';


function SignIn() {
    const [session,loading] = useSession()
    const router = useRouter();
    useEffect(() => {
        if(session && session.user){
            router.push('/products')
        }
    },[session])
    return (
        <Container>
            <SocialButton onClick={()=>signIn('google')} type='google'/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



export default SignIn;