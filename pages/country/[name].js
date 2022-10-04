import Link from "next/link";
import styled from "styled-components";
import { Button, Loading } from "../../components";
import { useIsMounted } from "../../hooks/useIsMounted";
import {
  arrayToListItem,
  getNativeCountryName,
  getCountryCurrencies,
} from "../../utilities";

export default function CountryDetail({ country }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <>
      <Link href="/" passHref>
        <a>
          <BackButton>Back</BackButton>
        </a>
      </Link>
      <CountryStyled>
        <CountryImage src={country.flags.svg} />
        <CountryText>
          <CountryName>{country.name.common}</CountryName>
          <CountryInfo>
            <CountryInfoColumn>
              <CountryInfoItem>
                <CountryInfoItemName>Native Name:</CountryInfoItemName>{" "}
                {getNativeCountryName(country)}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Population:</CountryInfoItemName>{" "}
                {country.population}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Region:</CountryInfoItemName>{" "}
                {country.region}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Sub Region:</CountryInfoItemName>{" "}
                {country.subregion}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Capital:</CountryInfoItemName>{" "}
                {arrayToListItem(country.capital)}
              </CountryInfoItem>
            </CountryInfoColumn>

            <CountryInfoColumn>
              <CountryInfoItem>
                <CountryInfoItemName>Top level domain:</CountryInfoItemName>{" "}
                {arrayToListItem(country.tld)}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Currencies:</CountryInfoItemName>{" "}
                {getCountryCurrencies(country)}
              </CountryInfoItem>

              <CountryInfoItem>
                <CountryInfoItemName>Languages:</CountryInfoItemName>{" "}
                {arrayToListItem(Object.values(country.languages))}
              </CountryInfoItem>
            </CountryInfoColumn>
          </CountryInfo>
        </CountryText>
      </CountryStyled>
    </>
  );
}

const BackButton = styled(Button)`
  margin-bottom: 4rem;
`;

const CountryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountryImage = styled.img`
  width: 450px;
  max-height: 350px;
  object-fit: contain;
`;

const CountryText = styled.div`
  width: 100%;
  max-width: 700px;
  color: ${({ theme }) => theme.mainClr};
`;

const CountryName = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
`;

const CountryInfo = styled.ul`
  list-style-type: none;
  max-height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CountryInfoColumn = styled.div``;

const CountryInfoItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CountryInfoItemName = styled.strong`
  font-weight: 600;
`;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { name: "Guatemala" } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { name: countryName } = params;
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const country = await response.json();

  return {
    props: {
      country: country[0],
    },
  };
};
