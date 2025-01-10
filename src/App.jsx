import { BabyNames } from "../ components/renderBabyNames.jsx";
import { babyNames } from "../data/babyNames.jsx";
import { useState } from "react";

import "./App.css";

function App() {
  let [searchItem, setSearchItem] = useState("");
  let [filteredBabyNames, setfilteredBabyNames] = useState(babyNames);

  function handleOnInput(e) {
    searchItem = e.target.value;
    setSearchItem(searchItem);

    filteredBabyNames = babyNames.filter((babyName) => {
      const name = babyName.name.toLowerCase();
      return name.includes(searchItem);
    });

    setfilteredBabyNames(filteredBabyNames);
  }

  return (
    <>
      <h1>Baby Name Picker</h1>
      <label htmlFor="seach-bar"></label>

      <div className="search-bar-container">
        <input
          type="text"
          id="search-bar"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onInput={handleOnInput}
          placeholder="Search for a name"
        />
      </div>
      <BabyNames babyNames={filteredBabyNames} />
    </>
  );
}

export default App;
