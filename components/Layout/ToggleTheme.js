import { isEqual } from "lodash";
import { useContext, useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import styled from "styled-components";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

export function ToggleTheme() {
  const [isTriggered, setTriggered] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    const currentThemeIsDark = isEqual(theme, themes.dark);
    setTriggered(currentThemeIsDark);
  }, [theme]);

  const handleClick = () => {
    setTriggered((prev) => !prev);
    toggleTheme();
  };

  return (
    <ToggleSwitch onClick={handleClick} title="Toggle Theme">
      {isTriggered ? (
        <ToggleElements>
          <BsMoonFill /> Dark Mode
        </ToggleElements>
      ) : (
        <ToggleElements>
          <BsSunFill /> Light Mode
        </ToggleElements>
      )}
    </ToggleSwitch>
  );
}

const ToggleSwitch = styled.button`
  outline: none;
  border: 2px solid transparent;
  background: none;
  width: auto;
  display: inline-block;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;

const ToggleElements = styled.div`
  color: ${({ theme }) => theme.mainClr};

  & > svg {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;
