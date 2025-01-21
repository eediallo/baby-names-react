import PropTypes from "prop-types";

export default function Favorite({ name, sex, onSelect }) {
  return (
    <button onClick={onSelect}>
      <p className={sex === "f" ? "female favorite" : "male favorite"}>
        {name}
      </p>
    </button>
  );
}

Favorite.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
