import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>zainDev</div>
      <div className={styles.text}>
        zain creative thoughts agency © All rights reserved
      </div>
    </div>
  );
}

export default Footer;
