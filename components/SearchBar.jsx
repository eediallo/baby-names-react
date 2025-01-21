import { useState } from "react";
import { babyNames } from "../data/babyNames.jsx";
import PropTypes from "prop-types";

export default function SearchBar({ setfilteredBabyNames }) {
  let [searchItem, setSearchItem] = useState("");
  function handleInput(e) {
    const searchValue = e.target.value.toLowerCase();
    setSearchItem(searchValue);

    const filteredNames = babyNames.filter((babyName) => {
      const name = babyName.name.toLowerCase();
      return name.includes(searchValue);
    });

    setfilteredBabyNames(filteredNames);
  }
  return (
    <div className="search-bar-container">
      <label htmlFor="seach-bar"></label>
      <input
        type="text"
        id="search-bar"
        value={searchItem}
        onChange={handleInput}
        placeholder="Search for a name"
      />
    </div>
  );
}

SearchBar.propTypes = {
  setfilteredBabyNames: PropTypes.func.isRequired,
};
