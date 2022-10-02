import { useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import { ThemeContext } from "../../contexts";

const options = [
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "America",
    value: "america",
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

export function Filter() {
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
    console.log(selectedOption);
  };
  return (
    <FilterStyled>
      <Select
        options={options}
        defaultValue={defaultOption}
        isClearable={true}
        isSearchable={false}
        placeholder={"Filter by region"}
        onChange={handleChange}
        styles={selectStyles}
        theme={selectTheme}
      />
    </FilterStyled>
  );
}

const FilterStyled = styled.div`
  width: 48%;
  max-width: 300px;
`;
