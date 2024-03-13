import Logo from "../../assets/logo.png";
import Resume from "../Resume";
import styles from "./styles.module.scss";

interface IProps {
  handleOpenModal: () => void;
  operation?: "add" | "edit";
}

function Header({ handleOpenModal, operation = "add" }: IProps) {
  return (
    <header className={styles.container}>
      <div></div>
      <div className={styles["container-add"]}>
        <img src={Logo} alt="logo" />
        {operation === "add" ? ( // Mostrar o ícone de adição se a operação for "add"
          <button className="btn-pink" onClick={handleOpenModal}>
            ✏️
          </button>
        ) : (
          <button
            className="btn-pink"
            onClick={() => console.log("Editar tarefa")}
          >
            📝
          </button>
        )}
      </div>

      <Resume />
    </header>
  );
}
export default Header;
