import styled from "@emotion/styled";

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