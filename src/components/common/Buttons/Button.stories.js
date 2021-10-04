import {SecondaryButton,Button,RoundButton} from './index'
import { MdOutlineAdd } from "react-icons/md";

export default{
    component:Button,
    title:"Button"
}

export const Secondary = () => <SecondaryButton>당근채팅</SecondaryButton>;
export const Round = () => (
  <RoundButton color="#FF8A3D">
    <MdOutlineAdd />
  </RoundButton>
);