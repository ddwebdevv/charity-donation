import styled, { css } from 'styled-components';
import Colors from '../../global.colors';

export const CustomRadioButtonContainer = styled.div`
    width: ${({ width }) => width};
    height: 50px;
    letter-spacing: 0.7px;
    line-height: 50px;
    padding: 0 30px;
    font-size: 15px;
    font-family:  'Noto Serif', serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius || '0px'};

    background-color: ${Colors.notActiveButton};
    color: white;
    border: none;

    &.active {
        background-color: ${Colors.activeButton};
        transform: scale(1.15);
    }
`;