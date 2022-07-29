import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --font:  'Inter', sans-serif;

        --color-primary: #a1f236;
        --color-primary-50: rgba(160, 242, 54, 0.5);
        --color-secondary: #680021;
        --color-secondary-50: rgb(104, 0, 33, 0.5);

        --grey-0: #F5F5F5;
        --grey-20: #E0E0E0;
        --grey-50:#828282;
        --grey-100: #333333;
        --grey: #1b1b1b;


    };

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, ul, li, aside,  header,  nav, section, summary{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    };

    aside, header, nav, section {
	display: block;
    };

    body {
	line-height: 1;
    font-family: var(--font);
    };

    ol, ul {
	list-style: none;
    };

`;

export default GlobalStyle;
