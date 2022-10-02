import Head from "next/head";
import { useEffect, useState } from "react";

import { Countries, Filter } from "../components";
import { Search } from "../components";
import { useIsMounted } from "../hooks";

export default function Home({ countries }) {
  const isMounted = useIsMounted();
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if (!search) {
      return setFilteredCountries(countries);
    }

    const getCountryByName = async (name) => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (response.ok) {
          const results = await response.json();
          return setFilteredCountries(results);
        } else {
          return setFilteredCountries([]);
        }
      } catch (err) {
        return setFilteredCountries([]);
      }
    };

    getCountryByName(search);
  }, [search, countries]);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Search setSearch={setSearch} />
      <Filter />
      <Countries countries={filteredCountries} search={search} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (response.ok) {
    const countries = await response.json();
    return {
      props: {
        countries,
      },
    };
  }
  return {
    notFound: true,
  };
};
