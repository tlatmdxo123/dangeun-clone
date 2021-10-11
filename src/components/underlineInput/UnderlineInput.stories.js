import { SelectInput,PriceInput } from "./styles";
import {PRODUCT_CATEGORY} from '../../constants'
import CheckInput from '../checkInput'
import TitleInput from './TitleInput'

export default {
  component: TitleInput,
  title: "UnderLineInput",
};

export const title = () => (
  <TitleInput placeholder='글 제목'/>
);
export const price = () => <PriceInput placeholder="가격(선택사항)" />;
export const select = () => <SelectInput selectLists={PRODUCT_CATEGORY} />;