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
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow-x: hidden;
  width: 19%;
  height: 400px;
  margin-right: 8%;
  margin-bottom: 8%;

  &:nth-of-type(4n) {
    margin-right: 0;
  }
`

const CountryImageContainer = styled.div`
  width: 100%;
  height: 200px;
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
