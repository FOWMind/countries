import styled from "styled-components";
import { Country, Paragraph } from "../";

export function Countries({ countries, search }) {
  return (
    <CountriesStyled>
      {countries.length ? (
        countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))
      ) : (
        <Paragraph>No results for &quot;{search.toString()}&quot;</Paragraph>
      )}
    </CountriesStyled>
  );
}

const CountriesStyled = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
