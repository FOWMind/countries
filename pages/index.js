import Head from "next/head";
import { useEffect, useState } from "react";
import { getCountries } from "../api";

import { Countries, Filters, Loading } from "../components";
import { useIsMounted } from "../hooks";

export default function Home({ countries }) {
  const isMounted = useIsMounted();
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [currentRegion, setCurrentRegion] = useState("");

  useEffect(() => {
    // No search or region
    if (!search && !currentRegion) {
      setFilteredCountries(countries);
    }

    // Filtered by region
    if (!search && currentRegion) {
      const countriesByRegion = countries.filter((country) => {
        const countryRegion = country.region.toLowerCase();
        return countryRegion === currentRegion;
      });
      setFilteredCountries(countriesByRegion || []);
    }

    // Filtered by search
    if (search && !currentRegion) {
      getCountries({ endpoint: `/name/${search}` }).then((countries) => {
        setFilteredCountries(countries || []);
      });
    }

    // Filtered by search and region
    if (search && currentRegion) {
      getCountries({ endpoint: `/name/${search}` }).then((countries) => {
        const countriesByNameAndRegion = countries.filter((country) => {
          const countryRegion = country.region.toLowerCase();
          return countryRegion === currentRegion;
        });
        setFilteredCountries(countriesByNameAndRegion || []);
      });
    }
  }, [search, countries, currentRegion]);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <>
      <Filters setSearch={setSearch} setCurrentRegion={setCurrentRegion} />
      <Countries filteredCountries={filteredCountries} search={search} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await getCountries({
    endpoint: "/all?fields=flags,name,population,region,capital",
  });
  if (countries) {
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
