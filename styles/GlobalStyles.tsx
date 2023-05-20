import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  
  /* COLOR PALETTE */
  --da-color-primary: #333333;
  --da-color-background: #f5f5f5;
}

@font-face {
    font-family: 'Olympic Headline';
    src: url("/OlympicHeadline.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Olympic Sans';
    src: url("/OlympicSans.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: ${theme.fontFamily.body};
}

ul {
  list-style: none;
}


h1,h2,h3,h4,h5{
  font-family: ${theme.fontFamily.heading};
}

h1{
  font-size: ${theme.typography.h1};
  text-transform: uppercase;
  color: ${theme.colors.primary};
}

body {
  background-color: ${theme.colors.background};
}

main{
  padding: 0 .625rem;
  padding-top: ${theme.height.navbar};
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
