import styled from 'styled-components';



export const PageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const SectionContainer = styled.div`
    background-color: ${props => props.bgColor};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3rem;
    max-width: 1300px;

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 0 1rem;
    }
    
`;

export const Text = styled.p`
    font-size: 1.5rem;
    padding: 0 2rem;
    width: 100%;
    font-style: italic;
`;

export const TextWithImage = styled.p`
    font-size: 1.3rem;
    width: 50%;
    padding: 0 2rem;
    text-align: justify;

    @media (min-width: 1300px) {
        width: 60%;
    }

    @media (max-width: 1300px) {
        width: 100%;
        padding: 0;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ImageContainer = styled.div`
    width: 50%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 10px 20px 2px black;

    @media (min-width: 1300px) {
        width: 40%;
    }

    @media (max-width: 1300px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    display: block;

    :hover {
        cursor: pointer;
        transform: scale(1.15);
        transition: transform 3s cubic-bezier(0.1, 0.7, 1.0, 0.1);
    }
`;






