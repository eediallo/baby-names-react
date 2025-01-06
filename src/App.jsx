import "./App.css";
import { babyNames } from "../data/babyNames";

function App() {
  const babyNameList = babyNames.map((babyName) => (
    <p key={babyName.id}>{babyName.name}</p>
  ));

  return <>{babyNameList}</>;
}

export default App;
