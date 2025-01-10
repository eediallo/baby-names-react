import PropTypes from "prop-types";
import { useState } from "react"

export function BabyNames({ babyNames }) {
  function sortedBabyNames() {
    return babyNames.sort((babyA, babyB) =>
      babyA.name.localeCompare(babyB.name)
    );
  }

  return sortedBabyNames().map((babyName) => {
    return (
      <>
        <button>
          <p
            className={babyName.sex === "f" ? "female name" : "male name"}
            key={babyName.id}
          >
            {babyName.name}
          </p>
        </button>
      </>
    );
  });
}

BabyNames.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
