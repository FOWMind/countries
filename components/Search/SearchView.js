import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export function SearchView({
  searchInputRef,
  value,
  handleChange,
  handleInput,
}) {
  return (
    <InputBox>
      <InputLabel htmlFor="searchInput">
        <AiOutlineSearch />
      </InputLabel>
      <InputStyled
        ref={searchInputRef}
        id="searchInput"
        type="text"
        placeholder="Search for a country"
        value={value}
        onChange={handleChange}
        onInput={handleInput}
      />
    </InputBox>
  );
}

const InputBox = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 ${({ theme }) => theme.shadowClr};
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainClr};
  position: relative;
  margin: 0 4% 1rem 0;

  @media screen and (min-width: 850px) {
    width: 48%;
    max-width: 500px;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);

  & > svg {
    font-size: 1.25rem;
    vertical-align: middle;
  }
`;

const InputStyled = styled.input`
  border: 2px solid transparent;
  outline: none;
  display: block;
  width: 100%;
  height: 50px;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.mainClr};
  background: none;
  padding: 0 2rem 0 4rem;
`;
