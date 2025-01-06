import { babyNames } from "../data/babyNames.jsx";

export function RenderBabyNames() {
  const babyNameList = babyNames.map((babyName) => {
    if (babyName.sex === "f") {
      return (
        <p className="female name" key={babyName.id}>
          {babyName.name}
        </p>
      );
    }
    return (
      <p className="male name" key={babyName.id}>
        {babyName.name}
      </p>
    );
  });

  return (
    <>
      <h1>Baby Names Picker</h1>
      <div className="names-container">{babyNameList}</div>
    </>
  );
}
