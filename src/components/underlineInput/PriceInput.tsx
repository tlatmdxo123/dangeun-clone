import React from 'react';
import CheckInput from '../checkInput';
import { PriceInputContainer } from './styles';

function PriceInput({placeholder}:{placeholder:string}) {
    return (
        <PriceInputContainer>
            <span className="won">₩</span>
            <input type="text" placeholder={placeholder} />
            <CheckInput/>
        </PriceInputContainer>
    );
}

export default PriceInput;