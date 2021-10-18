import React from 'react';
import styled from 'styled-components'

type LogoPath = {
    [key:string]:string
}

function SocialButton({onClick,type}:{onClick:()=>void,type:string}) {
    const logoPath:LogoPath = {
        google:'https://developers.google.com/identity/images/g-logo.png',
        github:'/images/GitHub-Mark/PNG/GitHub-Mark-32px.png'
    }
    return (
        <Container onClick={onClick}>
            <img src={logoPath[type]} alt={`${type} signin image`}/>
            <span>Sign in with {type}</span>
        </Container>
    );
}

const Container = styled.button`
    width: 250px;
    padding: 14px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color:rgba(0,0,0,0.54);
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-bottom: 13px;
    img{
        margin-right: 10px;
        width: 18px;
    }
`
export default SocialButton;