import theme from '@/styles/theme';
import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={theme.colors.background} />
      <meta
        name="description"
        content="Olympic Games App, you can see all your favorite athletes and olympic games here"
      ></meta>
      <link rel="icon" sizes="96x96" href="/favicon-96x96.png" />
      <title>Olympic Games App</title>
    </Head>
  );
};

export default Header;
