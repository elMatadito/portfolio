import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{ 
    box-sizing: border-box;
    min-height: 100vh;
  }

  body{
    background: #0A192F;
    color: #F8F8F8;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    margin: 0;
  }

  #my-portfolio{
    max-width: 500px;
    margin: 0 auto;
    min-height: 100vh;
  }

  p{
    margin: 0;
    margin-bottom: 3px;
  }
`;
