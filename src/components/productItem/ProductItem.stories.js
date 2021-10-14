import ProductItem from './index'

export default {
  component: ProductItem,
  title: "ProductItem",
};

const info = {
  images:
    ["https://dnvefa72aowie.cloudfront.net/origin/article/202110/8B65A551506A9E9B9412357C3E32BBE6FF09C8BF9FBD132F59AF7DCC85632085.jpg?q=82&s=300x300&t=crop"],
  title: "삼성 냉장고",
  address: "서울 강북구 번3동",
  price:180000,
  like: 4,
  chat: 2,
};

export const Default = () => <ProductItem info={info}></ProductItem>;