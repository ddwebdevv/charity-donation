import styled from 'styled-components';
import Colors from '../../global.colors';



export const PageContainer = styled.div`
    min-height: 86vh;
    top: 80px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    margin: 4rem 0;
    max-width: 1300px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    
    background-color: ${Colors.secondary};

    @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
        width: 90%;
    }
`;

export const Text = styled.p`
    font-size: 1.2rem;
    padding: 0 2rem;
    width: 100%;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: auto;
    border: 3px solid black;
    margin: 50px;
`;