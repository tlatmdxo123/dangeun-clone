import React from 'react'
import SearchInput from './index'

export default {
  component: SearchInput,
  title: "SearchInput",
};

const Template = args => <SearchInput {...args}/>

export const Default = Template.bind({});
Default.args = {
  placeholder: "동네 이름, 물품명 등을 검색해보세요!",
};