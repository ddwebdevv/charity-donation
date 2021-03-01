import styled from 'styled-components';
import Colors from '../../global.colors';

export const RadioButtonGroupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || '100%'};
    margin: 0;
    border-radius: ${({ borderRadius }) => borderRadius || '0px'};
    background-color: ${Colors.notActiveButton};
    ${({ styles }) => styles};
`;