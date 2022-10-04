import styled from "styled-components";
import { Filter, Search } from "../";
import { regionFilterOptions } from "../../utils/constants";

export function Filters({ setSearch, setFilteredItems, allCountries }) {
  return (
    <FiltersStyled>
      <Search setSearch={setSearch} />
      <Filter
        defaultOption={regionFilterOptions.defaultOption}
        options={regionFilterOptions.options}
        setFilteredItems={setFilteredItems}
        allCountries={allCountries}
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
