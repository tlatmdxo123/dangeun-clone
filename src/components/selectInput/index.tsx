import React from 'react';
import {nameMap} from '../../data'
import styled from 'styled-components'
 
function selectInput() {
    const lists = Object.keys(nameMap)
    console.log(lists)
    return (
        <StyledSelect>
            <select name='region1' id='region1'>
                <option value=''>지역을 선택하세요</option>
                {lists.map((list,index) => {
                    return <option key={index} value={list}>{list}</option>
                })}
            </select>
        </StyledSelect>
    );
}

const StyledSelect = styled.div`
    width: 180px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    padding: 10px 16px;
    border: 1px solid ${props => props.theme.lightMdGray};
    border-radius: 6px;
    select{
        border:none;
        outline:none;
        width: 100%;
    }

`


export default selectInput;