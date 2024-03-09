import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../fonts/Poppins-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export { inter, poppins };
