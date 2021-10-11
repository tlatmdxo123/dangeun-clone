import TextField from './index'

export default {
  component: TextField,
  title: "TextField",
};

export const defaultTextField = () => (
  <TextField
    name="product-description"
    placeholder={`{}에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}
  />
);