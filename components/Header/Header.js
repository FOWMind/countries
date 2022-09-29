import styled from "styled-components"

export function Header() {
  return (
    <HeaderStyled>
      <HeaderLogo>
        <HeaderLogoText>Where in the world?</HeaderLogoText>
      </HeaderLogo>
      {/* <ToggleTheme /> */}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg};
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

const HeaderLogo = styled.div``

const HeaderLogoText = styled.h1`
  color: ${({ theme }) => theme.mainClr};
  font-size: 1.5rem;
  font-weight: 900;
`
