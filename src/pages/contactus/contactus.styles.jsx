import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    padding: 10px;
    margin: 0;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const LiText = styled.p`
    font-size: 1rem;
    font-style: italic;

`;

export const ListContainer = styled.div`
    max-width: 1300px;
    width: 40%;
    padding: 20px;

    @media screen and (max-width: 1300px) {
        width: 65%;
        padding: 5px;
        margin: 5px;
    }

    @media screen and (max-width: 768px) {
        width: 85%;
    }
`;

export const List = styled.ul`
    

    & li {
        text-align: left;
    }
`;

export const Icon = styled.a`
    font-size: 1rem;
    margin: 10px;
    color: ${props => props.color};

    @media (max-width: 800px) {
        font-size: 0.9rem;
        margin:10px;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;