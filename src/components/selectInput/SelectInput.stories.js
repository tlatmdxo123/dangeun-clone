import Select from './index'
import { nameMap } from "../../data";

export default {
  component: Select,
  title:"Select"
};
const lists = Object.keys(nameMap);
export const SelectInput = () => <Select lists={lists} label='지역을 선택하세요'></Select>;
export const DisabledSelect = () => <Select lists={lists} label='지역을 선택하세요' disabled={true}></Select>;