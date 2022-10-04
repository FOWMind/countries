import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { FilterView } from "./";

const options = [
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "America",
    value: "americas",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
];

const defaultOption = {
  label: "Filter by region",
  value: "",
};

export function Filter({ setFilteredItems, allCountries }) {
  const { theme } = useContext(ThemeContext);

  const selectStyles = {
    container: (styles) => ({
      ...styles,
      boxShadow: `0 0 15px 0 ${theme.shadowClr}`,
      fontWeight: "600",
    }),
    control: (styles) => ({
      ...styles,
      minHeight: "50px",
      padding: "0 1rem",
      border: "none",
      cursor: "pointer",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
    }),
    menu: (styles) => ({
      ...styles,
      padding: ".5rem 0",
    }),
    option: (styles) => ({
      ...styles,
      color: theme.mainClr,
      padding: ".5rem 1rem",
    }),
  };

  const selectTheme = (prevTheme) => ({
    ...prevTheme,
    borderRadius: 5,
    colors: {
      ...prevTheme.colors,
      primary: theme.bodyBg,
      primary25: theme.secondaryBg,
      primary50: theme.bodyBg,
      neutral0: theme.mainBg,
      neutral80: theme.mainClr,
      neutral20: theme.secondaryBg,
    },
  });

  const handleChange = (selectedOption) => {
    if (!selectedOption) {
      return setFilteredItems(allCountries);
    }
    const selectedRegion = selectedOption.value.toLowerCase();
    const newCountries = allCountries.filter(
      (c) => c.region.toLowerCase() === selectedRegion
    );
    setFilteredItems(newCountries);
  };

  return (
    <FilterView
      options={options}
      defaultOption={defaultOption}
      handleChange={handleChange}
      selectStyles={selectStyles}
      theme={selectTheme}
    />
  );
}
