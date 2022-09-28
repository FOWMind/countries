import Link from "next/link"
import styled from "styled-components"
import { arrayToListItem } from "../../utilities"

export function Country({ country }) {
  const { flags, name, population, region, capital } = country

  return (
    <CountryStyled>
      <Link href={`/country/${name.official}`} passHref>
        <CountryClickable>
          <CountryImageContainer>
            <CountryImage src={flags?.svg} alt="" width="250" height="200" />
          </CountryImageContainer>
          <CountryList>
            <CountryName>{name.common}</CountryName>
            <CountryListItem>
              <CountryListItemName>Population:</CountryListItemName>{" "}
              {population}
            </CountryListItem>

            <CountryListItem>
              <CountryListItemName>Region:</CountryListItemName> {region}
            </CountryListItem>

            {capital && (
              <CountryListItem>
                <CountryListItemName>Capital:</CountryListItemName>{" "}
                {arrayToListItem(country.capital)}
              </CountryListItem>
            )}
          </CountryList>
        </CountryClickable>
      </Link>
    </CountryStyled>
  )
}

const CountryClickable = styled.a``

const CountryStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 10%);
  margin-bottom: 2rem;
  transition: transform 0.3s 0.1s;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      bottom: -10px;
    }
  }

  @media screen and (min-width: 700px) {
    margin-right: 4%;
    margin-bottom: 4%;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    width: 48%;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1299px) {
    width: 30.66%;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1300px) {
    width: 22%;

    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
`

const CountryImageContainer = styled.div`
  width: 100%;
  height: 45vw;

  @media screen and (min-width: 700px) {
    height: 30vw;
  }

  @media screen and (min-width: 1024px) {
    height: 20vw;
  }

  @media screen and (min-width: 1300px) {
    height: 180px;
  }
`

const CountryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
`

const CountryList = styled.ul`
  padding: 2rem;
  list-style-type: none;
`

const CountryName = styled.li`
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const CountryListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const CountryListItemName = styled.strong`
  font-weight: 900;
`
