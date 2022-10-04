const baseUrl = "https://restcountries.com/v3.1";

export const getCountries = async ({ endpoint }) => {
  try {
    const response = await fetch(baseUrl + endpoint);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    return null;
  }
};
