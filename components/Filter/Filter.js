import { useContext } from "react";
import Select from "react-select";
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
      display: "inline-block",
      boxShadow: `0 0 15px 0 ${theme.shadowClr}`,
    }),
    control: (styles) => ({
      ...styles,
      minHeight: "50px",
      padding: "0 1rem",
    }),
    option: (styles) => ({
      ...styles,
      color: theme.mainClr,
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
  );
}
