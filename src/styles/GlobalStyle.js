import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    font-family: ${props => props.theme.fonts.sans};
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 1.3;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin: 0 0 10px 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.accent.primary};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.accent.primary};
    }
  }
`;