import PhotoInput from './index'

export default {
  component: PhotoInput,
  title: "PhotoInput",
};

const photoLists = Array.from({length:10}).map((_) => {
    return "https://dnvefa72aowie.cloudfront.net/origin/article/202110/8B65A551506A9E9B9412357C3E32BBE6FF09C8BF9FBD132F59AF7DCC85632085.jpg?q=82&s=300x300&t=crop";
})

export const defaultInput = () => <PhotoInput imageLists={photoLists}></PhotoInput>;