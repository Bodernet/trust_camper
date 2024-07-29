import { useSelector } from "react-redux";
import { useState } from "react";

import css from "./Catalog.module.css";

import ModalWindow from "../../modal/ModalWindow";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Filter from "../../components/Filter/Filter";
import CamperCard from "../../components/CamperCard/CamperCard";
import Loader from "../../components/Loader/Loader";
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CamperModal from "../../components/CamperModal/CamperModal";
import {
  selectFilteredCampers,
  selectError,
  selectIsLoading,
} from "../../redux/pickups/selectors";

const Catalog = () => {
  const adverts = useSelector(selectFilteredCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + 4);
  };

  const handleOpenModal = (_id) => {
    setIsModalOpen(true);
    setModalData(adverts.filter((camper) => camper._id === _id)[0]);
    openModal();
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      {
        isError
        // &&
        // <ErrorMessage />
      }
      {isLoading && <Loader />}
      <div className={css.container}>
        <Filter adverts={adverts} />
        <div className={css.campersContainer}>
          {adverts.length === 0 && (
            <p className={css.noCampersFiltered}>
              There is no campers matches your search
            </p>
          )}
          <ul className={css.camperList}>
            {adverts.slice(0, visibleCards).map((pickup) => (
              <li className={css.camperItem} key={pickup._id}>
                <CamperCard pickup={pickup} handleOpenModal={handleOpenModal} />
              </li>
            ))}
          </ul>
          {visibleCards < adverts.length && (
            <button className={css.loadMore} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
      <ModalWindow isOpen={isModalOpen} closeModal={closeModal}>
        <CamperModal pickup={modalData} />
      </ModalWindow>
    </>
  );
};

export default Catalog;
