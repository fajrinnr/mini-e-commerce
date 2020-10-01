import styles from "./cardProduct.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHearRegular } from "@fortawesome/free-regular-svg-icons";
import LoveButton from "../buttons/loveButton";

interface ICardProduct {
  imageUrl: string;
  title: string;
  loved?: boolean;
  onClickProduct: () => void;
  price?: string;
  onClickLove?: () => void;
}

export function CardProductLarge(props: ICardProduct) {
  return (
    <div className={styles.container}>
      <div style={{ width: "100%" }}>
        <LoveButton
          loved={props.loved}
          customStyles={{
            width: "30px",
            height: "30px",
            float: "right",
            color: props.loved ? "red" : "#333333",
          }}
          onClick={props.onClickLove}
        />
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          props.onClickProduct();
        }}
      >
        <img src={props.imageUrl} alt={props.title} />
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export function CardProduct(props: ICardProduct) {
  return (
    <div
      className={styles.containerSmallCard}
      onClick={(e) => {
        e.preventDefault();
        props.onClickProduct();
      }}
    >
      <div className={styles.imgSmallCard} style={{ width: "150px" }}>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}
