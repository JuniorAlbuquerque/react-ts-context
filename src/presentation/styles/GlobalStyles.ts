import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    background: var(--background);
    color: var(--white);

    font-family: 'Poppins', sans-serif;
  }

  :root {
    --black: #000;
    --blue: #49E9FF;
    --gray: #B7B7B7;
    --white: #fff;
    --background: #606060;
  }
`;
