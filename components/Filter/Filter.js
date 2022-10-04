import { useSelectStyles } from "../../hooks/useSelectStyles";
import { FilterView } from "./";

export function Filter({
  defaultOption,
  options,
  setFilteredCountries,
  allCountries,
}) {
  const { selectStyles, selectTheme } = useSelectStyles();

  const handleChange = (selectedRegion) => {
    if (!selectedRegion) return setFilteredCountries(allCountries);
    const selectedRegionValue = selectedRegion.value.toLowerCase();

    const countriesByRegion = allCountries.filter(
      (c) => c.region.toLowerCase() === selectedRegionValue
    );
    setFilteredCountries(countriesByRegion);
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
