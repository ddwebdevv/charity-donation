import styled, { css } from 'styled-components';

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