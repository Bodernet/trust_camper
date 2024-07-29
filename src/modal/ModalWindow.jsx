import Modal from "react-modal";
import css from "./ModalWindow.module.css";
import Iconsvg from "../components/Icon/Icon";

Modal.setAppElement("#root");

const ModalWindow = ({ children, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalBackdrop}
    >
      <button className={css.modalCloseButton} onClick={closeModal}>
        <Iconsvg iconName="close" className={css.iconClose} />
      </button>
      <>{children}</>
    </Modal>
  );
};
export default ModalWindow;
