import { RenderBabyNames } from "../ components/renderBabyNames.jsx";
import { SearchBar } from "../ components/searchBar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Baby Name Picker</h1>
      <SearchBar />
      <RenderBabyNames />
    </>
  );
}

export default App;
