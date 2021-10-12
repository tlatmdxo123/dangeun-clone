import ProductInfo from './index'

export default {
  component: ProductInfo,
  title: "ProductInfo",
};

export const Default = () => (
  <ProductInfo
    title="삼성 냉장고"
    price="180000"
    category='생활가전'
    like={4}
    chat={2}
    content="원가 370,000
사용 1년 미만
깨끗하게 사용했습니다~"
    createdAt={new Date()}
  />
);