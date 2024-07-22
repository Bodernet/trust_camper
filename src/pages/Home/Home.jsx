import { Link } from "react-router-dom";
import css from "./Home.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Home = () => {
  return (
    <section>
      <DocumentTitle>TrustCamper</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to TrustCamper</h1>
        <h2 className={css.subtitle}>
          Discover the world on wheels. Travel in comfort and style.
        </h2>
        <Link className={css.catalogLink} to="/catalog">
          Campers
        </Link>
      </div>
    </section>
  );
};

export default Home;
