import styled, { css } from "styled-components"

export const MainContainer = styled.div`
  width:100%;
  max-width:1200px;
  height:900px;
  background-color:#ddd;
  margin:0 auto;
  padding:2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  ${({ bgColor }) => bgColor &&
    css`
    background-color:${bgColor};
  `}
`
export const SecondContainer = styled.div`
  text-align:center;
`