import Image from "../assets/jam jar.png";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.flexWrapRow}>
      <div className={styles.flexWrapCol}>
        <p className={styles.editMargin}>JaMz</p>
        <p className={`${styles.editMargin} ${styles.biggerText}`}>React APP</p>
      </div>
      <div className={styles.flexWrap}>
        <img src={Image} className={styles.imgSize} alt="logo" />
      </div>
    </div>
  );
};

export default Content;
