import { useSelectStyles } from "../../hooks/useSelectStyles";
import { FilterView } from "./";

export function Filter({
  defaultOption,
  options,
  setFilteredItems,
  allCountries,
}) {
  const { selectStyles, selectTheme } = useSelectStyles();

  const handleChange = (selectedOption) => {
    if (!selectedOption) return setFilteredItems(allCountries);

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
