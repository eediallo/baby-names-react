import PropTypes from "prop-types";

export default function BabyName({ sex, name, onSelect, babyName }) {
  return (
    <button onClick={() => onSelect(babyName)}>
      <p className={sex === "f" ? "female name" : "male name"}>{name}</p>
    </button>
  );
}

BabyName.propTypes = {
  sex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  babyName: PropTypes.object.onClick,
};
