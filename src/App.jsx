import "./App.css";
import { babyNames } from "../data/babyNames";

function App() {
  const babyNameList = babyNames.map((babyName) => {
    if (babyName.sex === "f") {
      return (
        <p
          className="female"
          key={babyName.id}
          style={{ backgroundColor: "pink", color: "red" }}
        >
          {babyName.name}
        </p>
      );
    }
    return (
      <p
        className="male"
        key={babyName.id}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        {babyName.name}
      </p>
    );
  });

  return <>{babyNameList}</>;
}

export default App;
