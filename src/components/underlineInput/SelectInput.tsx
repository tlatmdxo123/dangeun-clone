import React from 'react';
import { SelectInputContainer } from './styles';

function SelectInput({selectLists,name}:{selectLists:string[],name:string}) {
    return (
        <SelectInputContainer>
            <select name={name}>
                <option value="">카테고리 선택</option>
                {selectLists.map((list, index) => (
                    <option value={list} key={index}>
                    {list}
                    </option>
                ))}
            </select>
        </SelectInputContainer>
    );
}

export default SelectInput;