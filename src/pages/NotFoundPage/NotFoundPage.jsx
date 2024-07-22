import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Not found</DocumentTitle>
      <Link className={css.backHome} to="/">
        Back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
