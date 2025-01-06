import { babyNames } from "../data/babyNames.jsx";

export function RenderBabyNames() {
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

  return <div>{babyNameList}</div>;
}
