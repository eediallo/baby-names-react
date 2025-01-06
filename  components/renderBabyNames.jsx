import { babyNames } from "../data/babyNames.jsx";

function sortedBabyNames() {
  return babyNames.sort((babyA, babyB) => babyA.name.localeCompare(babyB.name));
}

export function RenderBabyNames() {
  const babyNameList = sortedBabyNames().map((babyName) => {
    return (
      <p
        className={babyName.sex === "f" ? "female name" : "male name"}
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
