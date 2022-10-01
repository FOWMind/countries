export function SearchView({
  searchInputRef,
  value,
  handleChange,
  handleInput,
}) {
  return (
    <form style={{ marginBottom: "2rem" }}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="search a country"
        value={value}
        onChange={handleChange}
        onInput={handleInput}
      />
    </form>
  );
}
