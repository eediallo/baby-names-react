import { useState } from "react";

export function SearchBar() {
  let [searchItem, setSearchItem] = useState("");

  function handleOnInput(e) {
    searchItem = e.target.value;
    setSearchItem(searchItem);
    const names = document.querySelectorAll(".name");
    names.forEach((name) => {
      const nameText = name.textContent.toLowerCase();
      nameText.includes(searchItem.toLowerCase())
        ? (name.style.display = "block")
        : (name.style.display = "none");
    });
  }

  return (
    <div className="search-bar-container">
      <label htmlFor="seach-bar"></label>
      <input
        type="text"
        id="search-bar"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onInput={handleOnInput}
        placeholder="Search for a name"
      />
    </div>
  );
}
