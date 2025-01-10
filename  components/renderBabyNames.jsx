import PropTypes from "prop-types";
import { useState } from "react";

export function BabyNames({ babyNames }) {
  let [favorites, setFavorites] = useState([]);
  let [favoriteItem, setFavoriteItem] = useState("");

  function handleOnClick() {
    babyNames.forEach((babyName) => {
      favorites.push(babyName);
    });
    console.log(favorites);
  }

  function sortedBabyNames() {
    return babyNames.sort((babyA, babyB) =>
      babyA.name.localeCompare(babyB.name)
    );
  }

  return sortedBabyNames().map((babyName) => {
    return (
      <div key={babyName.id}>
        <button onClick={handleOnClick}>
          <p className={babyName.sex === "f" ? "female name" : "male name"}>
            {babyName.name}
          </p>
        </button>
      </div>
    );
  });
}

BabyNames.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
