import React from 'react';
import styled from 'styled-components'
function TextField() {

    return (
        <StyledTextArea>
            <label htmlFor='product-description' className='hidden'>
                product descript textarea
            </label>
            <textarea id='product-description' name='product-description' placeholder={`{}에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}>
                
            </textarea>
        </StyledTextArea>
    );
}

const StyledTextArea = styled.div`
    width: 100%;
    textarea{
        width: 100%;
        resize: none;
        border:none;
        outline:none;
    }
    textarea:placeholder{
        color:${props => props.theme.textColorLight};
    }
    
`

export default TextField;