import React from 'react';
import { SelectInputContainer } from './styles';

function SelectInput({selectLists}:{selectLists:string[]}) {
    return (
        <SelectInputContainer>
            <select>
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