import sprite from "/src/assets/symbol-defs.svg";

const Iconsvg = ({ iconName, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Iconsvg;
