import css from "./ReviewsList.module.css";
import Iconsvg from "../Icon/Icon";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul className={css.reviewsListList}>
        {reviews.map((review) => {
          const firstLetter = review.reviewer_name.charAt(0).toUpperCase();
          const rating = review.reviewer_rating;
          return (
            <li key={review.reviewer_name + review.reviewer_rating}>
              <div className={css.reviewHeader}>
                <div className={css.reviewerInitial}>{firstLetter}</div>
                <div>
                  <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
                  <div className={css.ratingIcons}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Iconsvg
                        key={i}
                        iconName="rating"
                        className={
                          i < rating
                            ? css.iconRatingActive
                            : css.iconRatingNotActive
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.reviewerComment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewsList;
