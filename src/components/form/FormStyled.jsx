import styled from "@emotion/styled";

export const FormBox = styled.div`
padding: 16px;
width: 360px;
display: flex;
flex-direction: column;
`;

export const ButtonAdd = styled.button`
min-width: 200px;
height: 40px;
font-size: 20px;
background-color: green;
color: #ffffff;
border: none;
border-radius: 4px;

&:hover,
&:focus {
    background-color: orange;
}
`;

export const LabelBox = styled.label`
font-size: 36px;
`;

export const InputBox = styled.input`
margin-left: 10px;
font-size: 16px;
outline: transparent;
border-radius: 4px;

&:focus,
&:hover {
    border-color: green;
}
`;