import Head from "next/head"
import { useEffect, useState } from "react"

import { Header } from "../components"
import { Countries } from "../components/Countries/Countries"

export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          const countriesData = data.slice(0, 50)
          if (countriesData) {
            setCountries(countriesData)
          }
        })
        .catch((err) => console.error(err))
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    if (countries.length) {
      console.log(countries)
    }
  }, [countries])
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      {countries.length && <Countries countries={countries} />}
    </>
  )
}
