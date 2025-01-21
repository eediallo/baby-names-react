import Favorite from "./Favorite";
import PropTypes from "prop-types";
export default function Favorites({
  favorites,
  setFavorites,
  setNames,
  babyNames,
}) {
  function handleMoveToNamesClick(name) {
    setFavorites(favorites.filter((favoriteName) => favoriteName !== name));
    setNames((prvNames) => {
      const index = babyNames.findIndex((baby) => baby.id === name.id);
      const newNames = [...prvNames];
      newNames.splice(index, 0, name);
      return newNames;
    });
  }

  return (
    <div className="favorites-container">
      <h1>Favorites: </h1>
      <div className="favorites">
        {favorites.map((favorite) => (
          <Favorite
            onSelect={() => handleMoveToNamesClick(favorite)}
            key={favorite.id}
            {...favorite}
          />
        ))}
      </div>
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  setFavorites: PropTypes.func.isRequired,
  setNames: PropTypes.func.isRequired,
  babyNames: PropTypes.array.isRequired,
};
