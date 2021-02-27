import styled from 'styled-components';

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