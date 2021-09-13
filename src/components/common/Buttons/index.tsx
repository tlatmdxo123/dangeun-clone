import React from 'react';
import styled from 'styled-components'


export const Button = styled.button`
    padding: 9px 30px;
    font-size: 16px;
    border-radius: 6px;
`
export const SecondaryButton = styled(Button)`
    background: none;
    font-weight: bold;
    border:1px solid ${props => props.theme.lightMdGray};
    color:${props => props.theme.textColorGray};
`


