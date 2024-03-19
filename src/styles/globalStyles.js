import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;