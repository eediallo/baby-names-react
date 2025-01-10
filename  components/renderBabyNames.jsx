import PropTypes from "prop-types";
import { useState } from "react";

export function BabyNames({ babyNames }) {
  let [favorites, setFavorites] = useState([]);

  function handleClick(babyName) {
    setFavorites((prvFavorites) => [...prvFavorites, babyName]);
  }

  function sortedBabyNames() {
    return babyNames.sort((babyA, babyB) =>
      babyA.name.localeCompare(babyB.name)
    );
  }

  const namesList = sortedBabyNames().map((babyName) => {
    return (
      <>
        <button onClick={() => handleClick(babyName)}>
          <p
            key={babyName.id}
            className={babyName.sex === "f" ? "female name" : "male name"}
          >
            {babyName.name}
          </p>
        </button>
      </>
    );
  });

  const favoritesList = favorites.map((favorite) => {
    return (
      <>
        <button>
          <p key={favorite.name}>{favorite.name}</p>
        </button>
      </>
    );
  });

  return (
    <>
      <div>
        <h1>Favorites:</h1>
        <div className="favorites-container">{favoritesList}</div>
      </div>
      <div className="names-container">{namesList}</div>
    </>
  );
}

BabyNames.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
