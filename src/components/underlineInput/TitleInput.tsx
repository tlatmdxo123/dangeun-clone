import React from 'react';
import { UnderLineContainer } from './styles';

function TitleInput({placeholder,name}:{placeholder:string,name:string}) {
    return (
        <UnderLineContainer>
            <input type="text" placeholder={placeholder} name={name}/>
        </UnderLineContainer>
    );
}

export default TitleInput;