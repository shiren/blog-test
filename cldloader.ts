import { Cloudinary } from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions/resize';

const getImageUrlFromCouldinary = (src: string, width?: number) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dow8qjmrt' }, url: { secure: true } });
  const cldImage = cld.image(src);

  if (width) {
    cldImage.resize(Resize.fill().width(width));
  }

  return cldImage.toURL();
};

export default function cloudinaryLoader({ src, width }: { src: string; width?: number }) {
  const imgUrl =
    src.startsWith('/') || src.startsWith('http') ? src : getImageUrlFromCouldinary(src, width);

  return imgUrl;
}
