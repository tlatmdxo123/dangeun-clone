import { UnderLineContainer, SelectInput,PriceInput } from "./index";
import {PRODUCT_CATEGORY} from '../../constants'
import CheckInput from '../checkInput'

export default {
  component: UnderLineContainer,
  title: "UnderLineInput",
};

export const title = () => (
  <UnderLineContainer>
    <input type="text" placeholder="글 제목" />
  </UnderLineContainer>
);
export const price = () => (
  <PriceInput>
    <span className="won">₩</span>
    <input type="text" placeholder="가격(선택사항)" />
    <CheckInput/>
  </PriceInput>
);
export const select = () => (
  <SelectInput>
    <select>
      <option value="">카테고리 선택</option>
      {PRODUCT_CATEGORY.map((list, index) => (
        <option value={list} key={index}>
          {list}
        </option>
      ))}
    </select>
  </SelectInput>
);