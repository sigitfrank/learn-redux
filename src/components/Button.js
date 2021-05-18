import styled, { css } from 'styled-components'

export const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`


export const Button = styled.button`
    border:none;
    outline:none;
    background-color: #E69A8DFF;
    color:#5F4B8BFF;
    margin:1rem;
    padding:1.5rem;
    border-radius:.5rem;
    cursor: pointer;
    ${({primary}) => primary && css`
        background-color:#5F4B8BFF;
        color:#E69A8DFF;
    `}
`
