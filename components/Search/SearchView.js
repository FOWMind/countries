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
      <AiOutlineSearch />
      <InputStyled
        ref={searchInputRef}
        type="text"
        placeholder="Search for a country"
        value={value}
        onChange={handleChange}
        onInput={handleInput}
      />
    </InputBox>
  );
}

const InputBox = styled.label`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 ${({ theme }) => theme.shadowClr};
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainClr};
  padding: 0 2rem;

  & > svg {
    font-size: 1.25rem;
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
  padding: 0 1rem;
`;
