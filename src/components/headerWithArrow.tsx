import BackButton from "./buttons/backButton";
import { useRouter } from "next/router";
import styles from "./headerWithArrow.module.sass";

export function HeaderWithArrow(props: { title: string }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <BackButton
        customStyles={{ width: "30px", marginRight: "15px", height: "30px" }}
        onClick={() => router.back()}
      />
      <p>{props.title}</p>
    </div>
  );
}
