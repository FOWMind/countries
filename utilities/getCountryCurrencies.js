import { arrayToListItem } from "./"

export const getCountryCurrencies = (country) => {
  const currenciesList = Object.values(country.currencies)
  if (currenciesList.length <= 1) return currenciesList[0].name

  const currenciesNames = currenciesList.map((currency) => currency.name)
  return arrayToListItem(currenciesNames)
}
