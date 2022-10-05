import styled from "styled-components";
import { Filter, Search } from "../";
import { regionFilterOptions } from "../../utils/constants";

export function Filters({
  setSearch,
  setFilteredCountries,
  setCurrentRegion,
  allCountries,
}) {
  return (
    <FiltersStyled>
      <Search setSearch={setSearch} />
      <Filter
        defaultOption={regionFilterOptions.defaultOption}
        options={regionFilterOptions.options}
        setCurrentRegion={setCurrentRegion}
      />
    </FiltersStyled>
  );
}

const FiltersStyled = styled.div`
  @media screen and (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;
