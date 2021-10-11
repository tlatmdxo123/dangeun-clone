import React from 'react';
import styled from 'styled-components'
type props = {
    name:string,
    placeholder:string
}
function TextField({name,placeholder}:props) {
    return (
        <StyledTextArea className='textarea'>
            <label htmlFor={name} className='hidden'>
                product descript textarea
            </label>
            <textarea id={name} name={name} placeholder={placeholder}>
                
            </textarea>
        </StyledTextArea>
    );
}

const StyledTextArea = styled.div`
    width: 100%;
    textarea{
        width: 100%;
        height: 100%;
        padding: 0;
        resize: none;
        border:none;
        outline:none;

    }
    textarea:placeholder{
        color:${props => props.theme.textColorLight};
    }
    
`

export default TextField;