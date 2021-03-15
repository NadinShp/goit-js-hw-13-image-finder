import baseApi from '../js/api';
const { img_url } = baseApi;
const genereteImgPath = imageName => `${img_url}${imageName}`;
export default genereteImgPath;
