import { useSelector } from "react-redux";
import { useState } from "react";

import css from "./Catalog.module.css";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Filter from "../../components/Filter/Filter";
import CamperCard from "../../components/CamperCard/CamperCard";
import Loader from "../../components/Loader/Loader";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  selectFilteredCampers,
  selectError,
  selectIsLoading,
} from "../../redux/pickups/selectors";

const Catalog = () => {
  const advert = useSelector(selectFilteredCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [visibleCards, setVisibleCards] = useState(4);

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + 4);
  };

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      {
        isError
        // && <ErrorMessage />
      }
      {isLoading && <Loader />}
      <div className={css.container}>
        <Filter />
        <div className={css.campersContainer}>
          {advert.length === 0 && (
            <p className={css.noCampersFiltered}>
              There is no campers matches your search
            </p>
          )}
          <ul className={css.camperList}>
            {advert.slice(0, visibleCards).map((pickup) => (
              <li className={css.camperItem} key={pickup._id}>
                <CamperCard pickup={pickup} />
              </li>
            ))}
          </ul>
          {visibleCards < advert.length && (
            <button className={css.loadMore} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
