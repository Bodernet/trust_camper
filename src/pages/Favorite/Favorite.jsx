import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Favorites.module.css";
import css from "../Catalog/Catalog.module.css";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import CamperCard from "../../components/CamperCard/CamperCard";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from "../../redux/pickups/selectors";

const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

const Favorites = () => {
  const adverts = useSelector(selectCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteIds = getFavoritesFromLocalStorage();
    const favoriteCampers = adverts.filter((pickup) =>
      favoriteIds.includes(pickup._id)
    );
    setFavorites(favoriteCampers);
  }, [adverts]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      {
        isError
        // && <ErrorMessage />
      }
      {isLoading && <Loader />}
      <div className={styles.containerFavorite}>
        <h2 className={styles.favoriteTitle}>Favorites</h2>
        {favorites.length > 0 && (
          <p className={styles.description}>
            Here you can find all your favorite campers that you have saved.
            Explore and enjoy your favorite choices!
          </p>
        )}
        <Link to="/catalog" className={styles.backToCatalog}>
          Back to Catalog
        </Link>
        <ul className={css.camperList}>
          {favorites.map((pickup) => (
            <li className={css.camperItem} key={pickup._id}>
              <CamperCard pickup={pickup} />
            </li>
          ))}
        </ul>
        {favorites.length === 0 && (
          <>
            <p className={styles.noFavorites}>
              You have no favorites yet. Browse the catalog to find campers you
              love!
            </p>
            <div className={styles.imgFavorite}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
