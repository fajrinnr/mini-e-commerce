import styles from "./cardCategory.module.sass";

interface ICardCategory {
  imageUrl: string;
  title: string;
}

export function CardCategory(props: ICardCategory) {
  return (
    <div className={styles.container}>
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
}
