import React from 'react';
import Logo from '../Logo';
import styled from 'styled-components'
import SearchInput from '../SearchInput';
import { SecondaryButton } from '../Buttons';

function Header() {
    return (
        <StyledHeader>
            <div className="container">
                <Logo/>
                <SearchInput placeholder='동네 이름, 물품명 등을 검색해보세요!'/>
                <SecondaryButton className='chat'>당근채팅</SecondaryButton>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    .container{
        display: flex;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 20px 0 12px 0;
        .chat{
            margin-left: auto;
        }
        .logo{
            margin-right: 20px;
        }
    }
`


export default Header;