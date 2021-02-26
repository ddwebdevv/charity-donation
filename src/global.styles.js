import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Serif', serif;
    }

    * {
        box-sizing: border-box;
    }
`;

export const DefaultTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
`;

// a {
//     text-decoration: none;
//     color: black;
// }

// 
// @media screen and (max-width: 800px) {
//     padding: 10px;
// }