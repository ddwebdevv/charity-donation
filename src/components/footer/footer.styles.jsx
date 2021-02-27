import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../global.colors';

export const FooterContainer = styled.div`
    background-color: ${Colors.footer}
`;

export const Icon = styled(Link)`
    font-size: 2.5rem;
    margin: 0 10px;
    color: ${props => props.color};

    @media (max-width: 800px) {
        font-size: 1.5rem;
        margin:10px 10px;
    }
`;

export const SmallText = styled.div`
    font-size: 10px;
    text-align: center;
    padding-bottom: 20px;
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
`;