import React from 'react';
import styled from 'styled-components'

export const UnderLineContainer = styled.div`
    width: 100%;
    display: flex;
    width: 100%;
    border-bottom:1px solid ${props => props.theme.lightMdGray};
    padding:18px 0;
    &:placeholder{
        color:${props => props.theme.lightMdGray};
    }
`
export const PriceInputContainer = styled(UnderLineContainer)`
    display: flex;
    .won{
        color:${props => props.theme.textColorLight};
        font-size: 14px;
        text-align: bottom;
    }
    input{
        padding-left:5px;
    }
    .checkInput{
        margin-left: auto;
    }

`
export const SelectInputContainer = styled(UnderLineContainer)`
    justify-content: space-between;
    select{
        border:none;
        outline:none;
        width: 100%;
    }
`

