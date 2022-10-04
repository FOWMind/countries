import Select from "react-select";
import styled from "styled-components";

export function FilterView({
  options,
  defaultOption,
  handleChange,
  selectStyles,
  theme,
}) {
  return (
    <FilterStyled>
      <Select
        options={options}
        defaultValue={defaultOption}
        onChange={handleChange}
        styles={selectStyles}
        theme={theme}
        isClearable={true}
        isSearchable={false}
        placeholder={"Filter by region"}
      />
    </FilterStyled>
  );
}

const FilterStyled = styled.div`
  width: 48%;
  max-width: 300px;
`;
