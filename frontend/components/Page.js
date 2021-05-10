import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('/static/Roboto-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --red: #ff0000;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto-Regular', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({children}) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {children}
      </InnerStyles>
    </>
  )
}