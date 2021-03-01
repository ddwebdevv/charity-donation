import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Serif', serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export const DefaultTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 10px;
`;

export const TheTitle = styled.p`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    padding: 0 2rem;
    width: 100%;
    font-style: italic;
`;




