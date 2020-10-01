import styles from "./cardImageWithTitle.module.sass";

interface ICardImageWithTitleProps {
  imageUrl: string;
  imageTitle: string;
  title: string;
}

export function CardImageWithTitle(props: ICardImageWithTitleProps) {
  return (
    <div className={styles.container}>
      <img src={props.imageUrl} alt={props.imageTitle} />
      <p>{props.title}</p>
    </div>
  );
}
