import Head from "next/head";
import { useEffect, useState } from "react";
import { getCountries } from "../api";

import { Countries, Filters, Loading } from "../components";
import { useIsMounted } from "../hooks";

export default function Home({ countries }) {
  const isMounted = useIsMounted();
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if (!search) {
      return setFilteredCountries(countries);
    }

    getCountries({ endpoint: `/name/${search}` }).then((data) =>
      setFilteredCountries(data || [])
    );
  }, [search, countries]);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Filters
        setSearch={setSearch}
        setFilteredCountries={setFilteredCountries}
        allCountries={countries}
      />
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
