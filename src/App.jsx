import { Babies } from "../components/Babies.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { babyNames } from "../data/babyNames.jsx";
import { useState } from "react";
import "./App.css";
import Header from "../components/Header.jsx";

function App() {
  let [filteredBabyNames, setfilteredBabyNames] = useState(
    babyNames.sort((a, b) => a.name.localeCompare(b.name))
  );

  return (
    <>
      <Header />
      <SearchBar setfilteredBabyNames={setfilteredBabyNames} />
      <Babies babyNames={filteredBabyNames} />
    </>
  );
}

export default App;
