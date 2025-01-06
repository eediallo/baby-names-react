import { useState } from "react";

export function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  function handleOnInput(e) {
    const searchItem = e.target.value;
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
      <label htmlFor="seach-bar">Search for names: </label>
      <input
        type="text"
        id="search-bar"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onInput={handleOnInput}
      />
    </div>
  );
}
