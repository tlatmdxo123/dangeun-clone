import React from 'react';
import styled from 'styled-components'


export const Button = styled.button`
    padding: 9px 30px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
`
export const SecondaryButton = styled(Button)`
    background: none;
    font-weight: bold;
    border:1px solid ${props => props.theme.lightMdGray};
    color:${props => props.theme.textColorGray};
`
export const RoundButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 70px;
    height: 70px;
    font-size: 53px;
    border-radius:50%;
    background: ${props => props.color};
    text-align: center;
    color:#ffffff;
`

