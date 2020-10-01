import styles from "./button.module.sass";
import CSS from "csstype";

interface IButton {
  title: string;
  onClick?: () => void;
  withImage?: React.ReactNode;
  customStyle?: CSS.Properties;
}

export function Button(props: IButton) {
  return (
    <div className={styles.container}>
      <button
        style={props?.customStyle}
        onClick={(e) => {
          e.preventDefault();
          props?.onClick?.();
        }}
      >
        <div className={styles.content}>
          {props.withImage && props.withImage}
          {props.title}
        </div>
      </button>
    </div>
  );
}
