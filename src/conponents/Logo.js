import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className="logo-div">
      <ion-icon name="clipboard-outline"></ion-icon>
      <h4 className={styles.logo}>MyLibrary</h4>
    </div>
  );
}

export default Logo;
