import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import BabyName from "./BabyName";

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

  const namesList = names.map((babyName) => (
    <BabyName
      onSelect={() => handleMoveToFavoritesClick(babyName)}
      key={babyName.id}
      {...babyName}
    />
  ));

  const favoritesList = favorites.map((favorite) => {
    return (
      <div key={favorite.name}>
        <button onClick={() => handleMoveToNamesClick(favorite)}>
          <p
            className={
              favorite.sex === "f" ? "female favorite" : "male favorite"
            }
          >
            {favorite.name}
          </p>
        </button>
      </div>
    );
  });

  return (
    <div>
      <div>
        <div className="favorites-container">
          <h1>Favorites: </h1>
          <div className="favorites">{favoritesList}</div>
        </div>
      </div>
      <div className="names-container">{namesList}</div>
    </div>
  );
}

BabyNames.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
