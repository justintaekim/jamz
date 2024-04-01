import Logo from "../assets/JaMz Logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.menuItems}>
        <div>Jams</div>
        <div>ID Cards</div>
        <div>Website Redesigns</div>
        <div>Personal Websites</div>
        <div className={styles.blackDiv}>Client Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
