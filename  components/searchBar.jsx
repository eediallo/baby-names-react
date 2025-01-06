import { useState } from "react";

export function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <h1>Search Bar</h1>
      <label htmlFor="seach-bar">Search for names: </label>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </>
  );
}
