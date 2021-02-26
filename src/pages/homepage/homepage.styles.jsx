import styled from 'styled-components';

import bgImage from '../../assets/home-history.jpg';

export const PageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const SectionContainer = styled.div`
    background-color: ${props => props.bgColor};
    padding: 1rem 2rem 5rem 2rem;
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

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const ImageContainer = styled.div`
flex: 1;
justify-content: stretch;
  align-items: stretch;
    width: 50%;
    height: calc(100% + 10px);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 10px 20px 2px rgb(0 0 0 / 50%);

    @media (min-width: 768px) {
        width: 40%;
    }
    
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;

// export const TextContainer = styled.p`
//     font-size: 1.5rem;
//     padding: 0 2rem;
//     max-width: 1300px;
// `;


// export const HomePageContainer = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
// `;


// export const TextContainer = styled.p`
//     font-size: 1.5rem;
//     padding: 0 2rem;
//     max-width: 1300px;
// `;

// export const HistoryContainer = styled.div`
//     background-color: grey;
//     padding: 1rem 2rem 5rem 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `;

// export const StatementContainer = styled.div`
//     background-color: rgb(255, 247, 243);
//     font-style: italic;
//     width: 100%;
//     padding: 1rem 3rem 4rem 3rem;
// max-width: 1300px;
// `;
// export const HistoryContentContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 3rem;
//     max-width: 1300px;
// `;




