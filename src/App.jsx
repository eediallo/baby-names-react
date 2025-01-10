import { BabyNames } from "../components/renderBabyNames.jsx";
import { babyNames } from "../data/babyNames.jsx";
import { useState } from "react";

import "./App.css";

function App() {
  let [searchItem, setSearchItem] = useState("");
  // sort in ascending order initially
  let [filteredBabyNames, setfilteredBabyNames] = useState(
    babyNames.sort((a, b) => a.name.localeCompare(b.name))
  );

  function handleOnInput(e) {
    const searchValue = e.target.value.toLowerCase();
    setSearchItem(searchValue);

    const filteredNames = babyNames.filter((babyName) => {
      const name = babyName.name.toLowerCase();
      return name.includes(searchValue);
    });

    setfilteredBabyNames(filteredNames);
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
          onChange={handleOnInput}
          placeholder="Search for a name"
        />
      </div>
      <BabyNames babyNames={filteredBabyNames} />
    </>
  );
}

export default App;
