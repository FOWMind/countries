import styled from "styled-components"
import { Country } from "../"

export function Countries({ countries }) {
  if (!countries) return
  return (
    <CountriesStyled>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </CountriesStyled>
  )
}

const CountriesStyled = styled.div`
  padding: 2rem;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`
