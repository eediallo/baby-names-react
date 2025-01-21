import { BabyNames } from "../components/renderBabyNames.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { babyNames } from "../data/babyNames.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  let [filteredBabyNames, setfilteredBabyNames] = useState(
    babyNames.sort((a, b) => a.name.localeCompare(b.name))
  );

  return (
    <>
      <h1>Baby Name Picker</h1>
      <label htmlFor="seach-bar"></label>
      <SearchBar setfilteredBabyNames={setfilteredBabyNames} />
      <BabyNames babyNames={filteredBabyNames} />
    </>
  );
}

export default App;
