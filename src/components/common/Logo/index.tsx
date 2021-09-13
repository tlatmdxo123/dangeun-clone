import React from 'react';
import Image from 'next/image'

function Logo() {
    return (
        <div className='logo'>
           <Image src='/images/logo.svg' alt='당근마켓 로고' width='120' height='40'/> 
        </div>
    );
}

export default Logo;