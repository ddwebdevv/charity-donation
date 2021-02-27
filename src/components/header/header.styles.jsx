import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../../global.colors';

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    background-color: ${Colors.header};

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 105px;
    padding: 25px;
    margin-left: 125px;
    

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
        margin-left: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 100px;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin-right: 0;
    }
`;

const OptionContainerStyles = css`
    padding: 10px 25px;
    cursor: pointer;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;