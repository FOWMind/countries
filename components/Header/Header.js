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
  padding: 2rem 4rem;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
`

const HeaderLogo = styled.div``

const HeaderLogoText = styled.h1`
  color: #000;
  font-size: 1.5rem;
  font-weight: 900;
`
