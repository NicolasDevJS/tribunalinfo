import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

  body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
