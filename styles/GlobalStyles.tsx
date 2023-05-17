import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --da-font-headings:'Olympic Headline', sans-serif;
  --da-font-p: 'Olympic Sans', sans-serif;
  
  /* COLOR PALETTE */
  --da-color-primary: #333333;
  --da-color-highlight: #51d1f6;
  --da-color-background: #f5f5f5;
  --da-color-h1:#212529;

  /* FONT SIZE */
  --da-typography-h1: 1.9rem;
  --da-typography-h2: 1.5rem;
  --da-typography-h3: 1.625rem;
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
  font-family: var(--da-font-p);
  padding-top: 3rem;
}

ul {
  list-style: none;
}

h1,h2,h3,h4,h5{
  font-family: var(--da-font-headings);
}

h1{
  font-size: var(--da-typography-h1);
  text-transform: uppercase;
  color: var(--da-color-h1);
}

body {
  color: rgb(var(--foreground-rgb));
  background-color: var(--da-color-background);
}

main{
  padding: 0 .625rem;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
