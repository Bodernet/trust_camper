import { useState } from "react";

import css from "./CamperModal.module.css";

import ModalWindow from "../../modal/ModalWindow";
import Iconsvg from "../Icon/Icon";
import BookingForm from "../BookingForm/BookingForm";
import AdvantagesList from "../AdvantagesList/AdvantagesList";
import CamperTable from "../CamperTable/CamperTable";
import ReviewsList from "../ReviewsList/ReviewsList";
import CamperImage from "../CamperImage/CamperImage";

const CamperModal = ({ pickup }) => {
  const [activeTab, setActiveTab] = useState("Features");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (idx) => {
    setImageIndex(idx);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={css.modalBody}>
      <div className={css.modalMainInfo}>
        <h2 className={css.modalTitle}>{pickup.name}</h2>

        <div className={css.modalMainDescr}>
          <Iconsvg iconName="rating" className={css.iconRating} />
          <p className={css.modalRating}>{pickup.rating}</p>
          <p className={css.modalReviews}>
            &#x2768;{pickup.reviews.length} Reviews&#x2769;
          </p>
          <Iconsvg iconName="mapPin" className={css.iconMap} />
          <p>{pickup.location}</p>
        </div>
        <p className={css.modalPrice}>&#8364;{pickup.price.toFixed(2)}</p>
      </div>

      <div className={css.modalInfo}>
        <ul className={css.imgContainer}>
          {pickup.gallery.map((image, idx) => (
            <li key={idx}>
              <img
                src={image}
                alt={pickup.name}
                className={css.camperImg}
                onClick={() => openModal(idx)}
              />
            </li>
          ))}
        </ul>
        <div className={css.modalDescription}>{pickup.description}</div>
        <div className={css.buttonWrapper}>
          <button
            type="button"
            onClick={() => handleTabChange("Features")}
            className={
              activeTab === "Features" ? css.activeTab : css.buttonAddInfo
            }
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("Reviews")}
            className={
              activeTab === "Reviews" ? css.activeTab : css.buttonAddInfo
            }
          >
            Reviews
          </button>
        </div>
        <div
          className={
            activeTab === "Features" ? css.activeContainer : css.hidden
          }
        >
          <div className={css.featuresInfo}>
            <AdvantagesList pickup={pickup} />
            <h3 className={css.featuresTitle}>Vehicle details</h3>
            <CamperTable pickup={pickup} />
          </div>
          <BookingForm />
        </div>
        <div
          className={activeTab === "Reviews" ? css.activeContainer : css.hidden}
        >
          <div className={css.reviewsInfo}>
            <ReviewsList reviews={pickup.reviews} />
          </div>
          <BookingForm />
        </div>
      </div>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal}>
        <CamperImage images={pickup.gallery} imageIndex={imageIndex} />
      </ModalWindow>
    </div>
  );
};

export default CamperModal;
