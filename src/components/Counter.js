import styled, { css } from "styled-components";

export const CounterContainer = styled.div`
font-size:5rem;
margin-bottom:1rem;
box-shadow:1rem .5rem 1.5rem rgba(0,0,0,0.5);
${({ bgColor }) => bgColor && css`
    background-color:${bgColor}
`}
`