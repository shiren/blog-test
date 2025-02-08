import { describe, it, expect } from 'vitest';
import cloudinaryLoader from './cldloader';

describe('cldloader', () => {
  it('should return internal image if start with back slash', () => {
    expect(cloudinaryLoader({ src: '/image.jpg', width: 100 })).toEqual('/image.jpg');
  });

  it('should return external image if start with "http"', () => {
    expect(cloudinaryLoader({ src: 'https://image.jpg', width: 100 })).toEqual('https://image.jpg');
  });

  it('should return src bypass if start with back slash', () => {
    expect(cloudinaryLoader({ src: '/image.jpg', width: 100 })).toEqual('/image.jpg');
  });

  it('should return cloudinary url', () => {
    expect(
      cloudinaryLoader({ src: 'image' }).startsWith(
        'https://res.cloudinary.com/dow8qjmrt/image/upload/image'
      )
    ).toEqual(true);
  });

  it('could return cloudinary url with width', () => {
    expect(
      cloudinaryLoader({ src: 'image', width: 50 }).startsWith(
        'https://res.cloudinary.com/dow8qjmrt/image/upload/c_fill,w_50/image'
      )
    ).toEqual(true);
  });
});
