import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --font:  'Inter', sans-serif;

        --color-primary: #a1f236;
        --color-primary-50: rgba(160, 242, 54, 0.5);
        --color-primary-dark: #6eb315;
        --color-secondary: #9a1741;
        --color-secondary-50: rgb(154, 23, 65, 0.5);

        --white: #ffffff;
        --grey-0: #F5F5F5;
        --grey-20: #E0E0E0;
        --grey-50:#828282;
        --grey-100: #333333;
        --grey: #1b1b1b;
        --black: #000


    };

    html,figure, body, input, button, div, span, h1, h2, h3, h4, h5, h6, p, a, img, ul, li, aside,  header,  nav, section, summary{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    background: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: var(--font);

    };

    input:focus{
        outline: none;
    };

    aside, header, nav, section {
	display: block;
    };

    body {
	line-height: 1;
    };

    ol, ul {
	list-style: none;
    
    };

    button {
    cursor: pointer;
    padding: 11.5px 20px;
    border-radius: 8px;
    transition: background-color 0.5s ease-in-out;
    font-weight: 600;
    font-size: 1rem;
  };

  ::-webkit-scrollbar {
    display: none;
  };


`;

export default GlobalStyle;
