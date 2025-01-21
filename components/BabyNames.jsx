import BabyName from "./BabyName";
import PropTypes from "prop-types";

export default function BabyNames({ names, favorites, setNames }) {
  function handleMoveToFavoritesClick(babyName) {
    setNames(names.filter((name) => name !== babyName));
    favorites((prvFavorites) => [...prvFavorites, babyName]);
  }

  return (
    <div className="names-container">
      {names.map((babyName) => (
        <BabyName
          onSelect={() => handleMoveToFavoritesClick(babyName)}
          key={babyName.id}
          {...babyName}
        />
      ))}
    </div>
  );
}

BabyNames.propTypes = {
  names: PropTypes.array.isRequired,
  setNames: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};
