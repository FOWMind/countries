import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import { getCountries } from "../../api";
import { Button, Loading } from "../../components";
import { useIsMounted } from "../../hooks/useIsMounted";
import {
  arrayToListItem,
  getCountryCurrencies,
  getNativeCountryName,
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
          <BackButton>
            <BsArrowLeft /> Back
          </BackButton>
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

  & > svg {
    font-size: 1.25rem;
    vertical-align: text-top;
    margin-right: 0.5rem;
  }
`;

const CountryStyled = styled.div`
  @media screen and (min-width: 1250px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CountryImage = styled.img`
  width: auto;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 2rem;

  @media screen and (min-width: 1250px) {
    width: 350px;
    max-height: 300px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1400px) {
    width: 450px;
    max-height: 350px;
  }
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

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const CountryInfoColumn = styled.div`
  margin-bottom: 2rem;

  @media screen and (min-width: 1250px) {
    margin-bottom: 0;
  }
`;

const CountryInfoItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CountryInfoItemName = styled.strong`
  font-weight: 600;
`;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { name } = params;
  const country = await getCountries({
    endpoint: `/name/${name}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages`,
  });
  if (country) {
    return {
      props: {
        country: country[0],
      },
    };
  }
  return {
    notFound: true,
  };
};
