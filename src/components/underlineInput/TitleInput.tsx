import React from 'react';
import { UnderLineContainer } from './styles';

function TitleInput({placeholder}:{placeholder:string}) {
    return (
        <UnderLineContainer>
            <input type="text" placeholder={placeholder} />
        </UnderLineContainer>
    );
}

export default TitleInput;