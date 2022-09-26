import styled from "styled-components"

export function Country({ country }) {
  const { flags, name, population, region, capital } = country
  return (
    <CountryStyled>
      <CountryImageContainer>
        <CountryImage src={flags?.png} alt="" width="250" height="200" />
      </CountryImageContainer>
      <CountryList>
        <CountryName>{name.common}</CountryName>
        <CountryListItem>
          <CountryListItemName>Population:</CountryListItemName> {population}
        </CountryListItem>

        <CountryListItem>
          <CountryListItemName>Region:</CountryListItemName> {region}
        </CountryListItem>

        {capital && (
          <CountryListItem>
            <CountryListItemName>Capital:</CountryListItemName>{" "}
            {capital.length === 0
              ? capital[0]
              : capital.map((singleCapital, index) => {
                  // Doesn't show comma when it is the last
                  if (index + 1 === capital.length) return singleCapital
                  return `${singleCapital}, `
                })}
          </CountryListItem>
        )}
      </CountryList>
    </CountryStyled>
  )
}

const CountryStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 10%);
  overflow-x: hidden;
  margin-bottom: 2rem;

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
    height: 400px;

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
