import Image from "next/image";
import styles from "./HeaderMobile.module.css";
import LoginBtn from "../LoginBtn/LoginBtn";

export default function HeaderMobile() {
  return (
    <header className={styles.header}>
      <Image
        src="/menu-icon.svg"
        alt="Menu"
        className={styles.retractableMenu}
        width={24}
        height={24}
      />

      <div className={styles.contentTitle}>
        <Image
          src="/logo.svg"
          alt="Guitar Logo"
          className={styles.logoIcon}
          width={24}
          height={24}
        />
        <h1>MusicaUni</h1>
      </div>

      <a href="#" className={styles.loginSection}>
        <Image
          src="/login.svg"
          alt="User login"
          className={styles.loginIcon}
          width={24}
          height={24}
        />
      </a>
    </header>
  );
}
