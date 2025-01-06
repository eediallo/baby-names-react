import { babyNames } from "../data/babyNames.jsx";

export function RenderBabyNames() {
  const babyNameList = babyNames.map((babyName) => {
    return (
      <p
        className={babyName.sex === "f" ? "male name" : "female name"}
        key={babyName.id}
      >
        {babyName.name}
      </p>
    );
  });

  return (
    <>
      <h1>Baby Name Picker</h1>
      <div className="names-container">{babyNameList}</div>
    </>
  );
}
