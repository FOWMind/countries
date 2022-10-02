import styled from "styled-components";

export function SearchView({
  searchInputRef,
  value,
  handleChange,
  handleInput,
}) {
  return (
    <form style={{ marginBottom: "2rem" }}>
      <InputStyled
        ref={searchInputRef}
        type="text"
        placeholder="Search for a country"
        value={value}
        onChange={handleChange}
        onInput={handleInput}
      />
    </form>
  );
}

const InputStyled = styled.input`
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  display: block;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainClr};
  font-family: inherit;
  font-size: 0.9rem;
  box-shadow: 0 0 15px 0 ${({ theme }) => theme.shadowClr};
  padding: 0 2rem;
`;
