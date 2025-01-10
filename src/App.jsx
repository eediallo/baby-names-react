import { BabyNames } from "../ components/renderBabyNames.jsx";
import { SearchBar } from "../ components/searchBar.jsx";
import { babyNames } from "../data/babyNames.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1>Baby Name Picker</h1>
      <SearchBar />
      <div className="names-container">
        <BabyNames babyNames={babyNames} />
      </div>
    </>
  );
}

export default App;
