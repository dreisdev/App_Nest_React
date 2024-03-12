import Logo from "../../assets/logo.png";
import Resume from "../Resume";
import styles from "./styles.module.scss";

interface IProps {
  handleOpenModal: () => void;
}

function Header({ handleOpenModal }: IProps) {
  return (
    <header className={styles.container}>
      <div></div>
      <div className={styles["container-add"]}>
        <img src={Logo} alt="logo" />
        <button className="btn-pink" onClick={handleOpenModal}>
          +
        </button>
      </div>

      <Resume />
    </header>
  );
}
export default Header;
