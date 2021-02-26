import styled, { css } from 'styled-components';


const donateButtonStyles = css`
    background-color: red;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: red;
        border: 1px solid black;
    }
`;

const invertedButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const getButtonStyles = props => {
    if (props.donate) {
        return donateButtonStyles;
    }

    return invertedButton;
};


export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    border-radius: 25px;
    padding: 0 30px;
    font-size: 15px;    
    text-transform: uppercase;
    font-family:  'Noto Serif', serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}

`;