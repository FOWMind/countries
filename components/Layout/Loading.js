import styled from "styled-components";

export function Loading() {
  return <LoadingStyled>Loading...</LoadingStyled>;
}

export const LoadingStyled = styled.p`
  color: ${({ theme }) => theme.mainClr};
`;
