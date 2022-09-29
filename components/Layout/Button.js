import styled from "styled-components"

export const Button = styled.button`
  all: unset;
  border: 2px solid transparent;
  border-radius: 5px;
  display: inline-block;
  height: 40px;
  padding: 0 2rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.mainClr};
  background-color: ${({ theme }) => theme.mainBg};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
