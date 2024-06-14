import { createGlobalStyle } from 'styled-components';

// 전역 스타일 설정
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'intelone-mono-font-family-regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/intelone-mono-font-family-regular.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}


  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
