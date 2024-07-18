import { NavLink } from "react-router-dom";
import svg from "../../img/icons.svg";
import css from "./Navigation.module.css";
import clsx from "clsx";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLinc, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <>
      <nav className={css.header}>
        <div className={css.navLinks}>
          <NavLink className={getNavLinkClassNames} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassNames} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={getNavLinkClassNames} to="/favorite">
            Favorite
          </NavLink>
        </div>
        <div className={css.svgLink}>
          <NavLink to="/somepath">
            <svg className={css.icon_pick}>
              <use href={`${svg}#icon-van3`}></use>
            </svg>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
