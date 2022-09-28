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
  @media screen and (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`
