import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./modal.module.sass";

interface IModalProps {
  onClickXButton: () => void;
  modalTitle: string;
  children: React.ReactNode;
}

export function Modal(props: IModalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>{props.modalTitle}</p>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={(e) => {
              e.preventDefault();
              props.onClickXButton();
            }}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className={styles.body}>{props.children}</div>
      </div>
    </div>
  );
}
