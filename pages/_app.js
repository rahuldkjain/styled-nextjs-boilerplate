import React from "react";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
  #__next{
    height: 100%;
  }
  h1,h2,h3,h4,p{
    margin: 0;
  }
`;

const App = ({ Component }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component />
    </ThemeProvider>
  );
};

export default App;
