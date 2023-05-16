import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';
import Header from '@/components/Header';
import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
