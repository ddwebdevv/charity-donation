import styled, { css } from 'styled-components';
import Colors from '../../global.colors';




const donateButtonStyles = css`
    background-color: red;
    color: white;
    border: none;
    text-transform: uppercase;

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
    min-width: 125px;
    height: 36px;
    
    &:hover {
      background-color: ${Colors.primary};
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
    font-family:  'Noto Serif', serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    ${getButtonStyles}

`;