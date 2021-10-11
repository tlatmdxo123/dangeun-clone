import React from 'react';
import styled from 'styled-components'
import {MdSearch} from 'react-icons/md'

function SearchInput({placeholder}:{placeholder:string}) {
    return (
        <StyledSearchInput >
            <input placeholder={placeholder}/>
            <button className="icon">
                <MdSearch/>
            </button>
        </StyledSearchInput>
    );
}

const StyledSearchInput = styled.div`
    display: flex;
    width: 390px;
    padding: 10px 17px;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    font-size: 16px;
    input{
        flex-grow: 1;
        color:${props => props.theme.textColorLight};
    }
    .icon{
        font-size: 20px;
        color:${props => props.theme.textColorLight};
    }
    
`

export default SearchInput;