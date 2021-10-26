import React from 'react';
import CheckInput from '../checkInput';
import { PriceInputContainer } from './styles';

function PriceInput({placeholder,name}:{placeholder:string,name:string}) {
    return (
        <PriceInputContainer>
            <span className="won">₩</span>
            <input type="text" placeholder={placeholder} name={name}/>
            <CheckInput/>
        </PriceInputContainer>
    );
}

export default PriceInput;