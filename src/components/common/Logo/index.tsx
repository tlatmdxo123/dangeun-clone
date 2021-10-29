import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

function Logo() {
    const router = useRouter();
    return (
        <div className='logo' onClick={() => router.push('/')}>
           <Image src='/images/logo.svg' alt='당근마켓 로고' width='120' height='40'/> 
        </div>
    );
}

export default Logo;