import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import BabyNames from "./BabyNames";
import Favorites from "./Favorites";

export function Babies({ babyNames }) {
  let [favorites, setFavorites] = useState([]);
  let [names, setNames] = useState(babyNames);

  useEffect(() => {
    setNames(babyNames);
  }, [babyNames]);

  return (
    <>
      <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
        setNames={setNames}
        babyNames={babyNames}
      />
      <BabyNames names={names} favorites={setFavorites} setNames={setNames} />
    </>
  );
}

Babies.propTypes = {
  babyNames: PropTypes.array.isRequired,
};
