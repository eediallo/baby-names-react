export function BabyNames({ babyNames }) {
  function sortedBabyNames() {
    return babyNames.sort((babyA, babyB) =>
      babyA.name.localeCompare(babyB.name)
    );
  }

  return sortedBabyNames().map((babyName) => {
    return (
      <p
        className={babyName.sex === "f" ? "female name" : "male name"}
        key={babyName.id}
      >
        {babyName.name}
      </p>
    );
  });
}
