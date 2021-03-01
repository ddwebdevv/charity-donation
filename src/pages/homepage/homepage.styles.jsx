import styled, { css } from 'styled-components';



export const PageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

    @media (min-width: 1200px) {
        width: 40%;
    }

    @media (max-width: 1200px) {
        width: 80%;
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

const shrink = css`
    top: 14px;
    font-size: 12px;
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrink}
      }
`;


export const Label = styled.label`
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 35px;
    transition: 300ms ease all;
    color: grey;

    &.shrink {
        ${shrink}
    }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 15px 0;
`;






