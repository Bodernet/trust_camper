import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../favorites/selectors";

const selectCampers = (state) => state.advert.pickups;
const selectIsLoading = (state) => state.advert.loading;
const selectError = (state) => state.advert.error;

const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (pickups, favorites) => {
    if (!Array.isArray(pickups)) {
      console.error("pickups is not an array", pickups);
      return [];
    }

    return pickups.filter((pickup) => {
      const matchesLocation = favorites.location
        ? pickup.location
            .toLowerCase()
            .includes(favorites.location.toLowerCase())
        : true;

      const matchesForm = favorites.form
        ? pickup.form === favorites.form
        : true;

      const matchesDetails = Object.keys(favorites.details).every((detail) => {
        if (detail === "automatic") return true;
        return !favorites.details[detail] || pickup.details[detail];
      });

      const matchesTransmission = favorites.details.automatic
        ? pickup.transmission.toLowerCase() === "automatic"
        : true;

      return (
        matchesLocation && matchesForm && matchesDetails && matchesTransmission
      );
    });
  }
);

export { selectIsLoading, selectError, selectFilteredCampers, selectCampers };
