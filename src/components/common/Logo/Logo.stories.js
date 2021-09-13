import React from 'react'

import Logo from './index'

export default{
    component:Logo,
    title:'Logo'
}

const Template = args => <Logo {...args}/>

export const Default = Template.bind({})
