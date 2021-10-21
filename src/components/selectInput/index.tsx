import React from 'react';
import styled from 'styled-components'
 
function SelectInput({label,lists,disabled=false,onChange}:{label:string,lists:string[],disabled?:boolean,onChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void}) {
    return (
        <StyledSelect>
            <select disabled={disabled} name='region1' id='region1' onChange={(e) => onChange(e)}>
                <option value=''>{label}</option>
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


export default SelectInput;