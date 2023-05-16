import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --da-font-headings:'Inter', sans-serif;
  
  --da-background-color: #fff;
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

body {
  color: rgb(var(--foreground-rgb));
  background-color: var(--da-background-color);
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
