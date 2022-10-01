import { useRef, useState } from "react";
import { useFinishedTyping } from "../../hooks";
import { SearchView } from "./";

export function Search({ setSearch }) {
  const [value, setValue] = useState("");
  const { onInput } = useFinishedTyping();
  const searchInputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleInput = () => {
    onInput(finishedTyping);
  };

  const finishedTyping = () => {
    setSearch(searchInputRef.current.value);
  };

  return (
    <SearchView
      searchInputRef={searchInputRef}
      value={value}
      handleChange={handleChange}
      handleInput={handleInput}
    />
  );
}
