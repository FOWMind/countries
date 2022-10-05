import { useSelectStyles } from "../../hooks/useSelectStyles";
import { FilterView } from "./";

export function Filter({ defaultOption, options, setCurrentRegion }) {
  const { selectStyles, selectTheme } = useSelectStyles();

  const handleChange = (selectedRegion) => {
    const selectedRegionValue = selectedRegion?.value.toLowerCase();
    setCurrentRegion(selectedRegionValue);
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
