'use client'

const BASE_PATH = '/profundamente-web';

export default function staticImageLoader({ src }: { src: string }): string {
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  return `${BASE_PATH}${src}`;
}
