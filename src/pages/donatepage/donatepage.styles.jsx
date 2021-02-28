import styled from 'styled-components';
import Colors from '../../global.colors';



export const BgImage = styled.div`
    min-height: 86vh;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
`;

export const PageContainer = styled.div`
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    margin-top: 4rem;
    max-width: 1300px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: ${Colors.secondary};

    @media screen and (max-width: 768px) {
        margin-top: 0.5rem;
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