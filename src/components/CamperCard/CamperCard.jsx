import {
  useEffect,
  // useState
} from "react";

import css from "./CamperCard.module.css";

// import CamperModal from "../../modal/CamperModal";
// import Iconsvg from "../Icon/Icon";

const CamperCard = ({ pickup }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(pickup._id)) {
      //   setIsFavorite(true);
    }
  }, [pickup._id]);

  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(pickup._id)) {
      const updatedFavorites = favorites.filter((id) => id !== pickup._id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      //   setIsFavorite(false);
    } else {
      favorites.push(pickup._id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      //   setIsFavorite(true);
    }
  };

  const { adults, transmission, engine, details } = pickup;

  const camperPros = [
    {
      label: adults === 1 ? "adult" : "adults",
      value: adults,
      iconName: "people",
    },
    {
      label: "",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: "automatic",
    },
    {
      label: "",
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: "petrol",
    },
    {
      label: "",
      value:
        details.kitchen > 0
          ? details.kitchen === 1
            ? "Kitchen"
            : `${details.kitchen} kitchens`
          : "",
      iconName: "kitchen",
    },
    {
      label: details.beds === 1 ? "bed" : "beds",
      value: details.beds,
      iconName: "bed",
    },
    {
      label: "",
      value: details.airConditioner > 0 ? "AC" : "",
      iconName: "airContainer",
    },
  ];

  return (
    <>
      <img
        src={pickup.gallery[0]}
        alt={pickup.name}
        className={css.camperImage}
      />
      <div className={css.camperInfo}>
        <div>
          <div className={css.camperTitle}>
            <h3>{pickup.name}</h3>
            <div className={css.camperTop}>
              <span>&#8364;{pickup.price}.00 </span>
              <button
                type="button"
                onClick={handleToggleFavorite}
                className={css.addToFavorite}
              >
                {/* <Iconsvg
                  iconName="heart"
                  className={isFavorite ? css.iconHeartPressed : css.iconHeart}
                /> */}
              </button>
            </div>
          </div>
          <div className={css.camperAddInfo}>
            {/* <Iconsvg iconName="rating" className={css.iconRating} /> */}
            <p className={css.camperRating}>{pickup.rating}</p>
            <p className={css.camperReviews}>
              &#x2768;{pickup.reviews.length} Reviews&#x2769;
            </p>
            {/* <Iconsvg iconName="mapPin" className={css.iconMap} /> */}
            <p>{pickup.location}</p>
          </div>
        </div>

        <p className={css.camperDescr}>{pickup.description}</p>

        <ul className={css.camperPros}>
          {camperPros.map(
            ({ label, value, iconName }) =>
              value && (
                <li
                  className={css.camperProsItem}
                  key={`${pickup._id}-${iconName}`}
                >
                  {/* <Iconsvg
                    className={css.iconCamperItems}
                    iconName={iconName}
                  /> */}
                  {value} {label}
                </li>
              )
          )}
        </ul>

        <button
          className={css.showMore}
          // onClick={openModal}
        >
          Show more
        </button>
      </div>
      {/* <CamperModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      /> */}
    </>
  );
};

export default CamperCard;
