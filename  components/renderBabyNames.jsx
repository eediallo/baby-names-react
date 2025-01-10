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
      <div key={babyName.id}>
        <button onClick={() => handleClick(babyName)}>
          <p className={babyName.sex === "f" ? "female name" : "male name"}>
            {babyName.name}
          </p>
        </button>
      </div>
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
    <div>
      <div>
        <h1>Favorites:</h1>
        <div className="favorites-container">{favoritesList}</div>
      </div>
      <div className="names-container">{namesList}</div>
    </div>
  );
}

BabyNames.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
