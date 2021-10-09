import React from 'react';
import styled from 'styled-components'
import { MdCheckCircle } from "react-icons/md";

function CheckInput() {
    const check = (e:React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        e.currentTarget.classList.toggle('checked');
    }
    return (
        <StyledCheckInput className='checkInput'>
            <input type="checkbox" id="price-propose-check" name="price-propose-check" className='hidden'/>
            <label onClick={e => check(e)} htmlFor="price-propose-check">
                <MdCheckCircle className='icon'/>
                <span>가격제안 받기</span>
            </label>
        </StyledCheckInput>
    );
}

const StyledCheckInput = styled.div`
    color:${props => props.theme.textColorLight};
    font-size: 14px;
    label.checked {
        color:#000000;
        .icon{
            color:${props => props.theme.primary};
        }
    }

`

export default CheckInput;