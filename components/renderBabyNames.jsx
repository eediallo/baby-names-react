import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function BabyNames({ babyNames }) {
  let [favorites, setFavorites] = useState([]);
  let [names, setNames] = useState(babyNames);

  function handleMoveToFavoritesClick(babyName) {
    setNames(names.filter((name) => name !== babyName));
    setFavorites((prvFavorites) => [...prvFavorites, babyName]);
  }

  function handleMoveToNamesClick(name) {
    setFavorites(favorites.filter((favoriteName) => favoriteName !== name));
    setNames((prvNames) => {
      const index = babyNames.findIndex((baby) => baby.id === name.id);
      const newNames = [...prvNames];
      newNames.splice(index, 0, name);
      return newNames;
    });
  }

  useEffect(() => {
    setNames(babyNames);
  }, [babyNames]);

  const namesList = names.map((babyName) => {
    return (
      <div key={babyName.id}>
        <button onClick={() => handleMoveToFavoritesClick(babyName)}>
          <p className={babyName.sex === "f" ? "female name" : "male name"}>
            {babyName.name}
          </p>
        </button>
      </div>
    );
  });

  const favoritesList = favorites.map((favorite) => {
    return (
      <div key={favorite.name}>
        <button onClick={() => handleMoveToNamesClick(favorite)}>
          <p>{favorite.name}</p>
        </button>
      </div>
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
