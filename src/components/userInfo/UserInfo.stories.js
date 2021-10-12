import UserInfo from './index'

export default{
    component:UserInfo,
    title:'UserInfo'
}

export const Default = () => (
  <UserInfo
    name="심승태"
    address="강북구 번3동"
    profile="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
  />
);