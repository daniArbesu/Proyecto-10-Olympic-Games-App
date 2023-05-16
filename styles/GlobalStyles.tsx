import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --da-font-headings:'Inter', sans-serif;
  
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

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
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

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
