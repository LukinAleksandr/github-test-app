import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  html,
  body,
  #root {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    line-height: 17.61px;
    font-family: 'Bellota', cursive;
    background-color: #F7F7F7;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
 

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  
  *::-webkit-scrollbar-track {
    box-shadow: none;
  }
  
  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #E4E4E4;
  }

`;
