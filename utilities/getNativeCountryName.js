export const getNativeCountryName = (country) => {
  const countryLanguages = Object.entries(country.languages)
  const nativeLanguage = countryLanguages[countryLanguages.length - 1][0]
  const nativeName = country.name.nativeName[nativeLanguage].common
  return nativeName
}
