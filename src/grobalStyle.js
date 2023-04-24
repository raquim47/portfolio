import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NEXON Lv1 Gothic';
    src: url('${process.env.PUBLIC_URL}/fonts/NEXON_Lv1_Gothic_OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
@font-face {
    font-family: 'NEXON Lv1 Gothic Bold';
    src: url('${process.env.PUBLIC_URL}/fonts/NEXON_Lv1_Gothic_OTF_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
html::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
html::-webkit-scrollbar-thumb {
  background-color: #4e4e4e;
  border-radius: 100px;
}
html::-webkit-scrollbar-track {
  background-color: #4e4e4e;
  border-radius: 100px;
  background-clip: padding-box;
  border: 3px solid transparent;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  font-family: 'NEXON Lv1 Gothic', sans-serif;
  color: black;
  overflow-x: hidden;
  line-height: 1.2;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

body.scrollHidden {
  overflow-y: hidden;
}

a {
  text-decoration:none;
  color:inherit;
}

strong {
    font-family: 'NEXON Lv1 Gothic bold';
}
`;
