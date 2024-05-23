import Image from "next/image";
import styles from "./Header.module.css"
import LoginBtn from "../LoginBtn/LoginBtn";

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.contentTitle}>
      <Image
              src="/logo.svg"
              alt="Guitar Logo"
              className={styles.logoIcon}
              width={40}
              height={40}
              priority
      />
      <h1>MusicaUni</h1>
      </div>

      <nav className={styles.navBar}>
        <a href="#Home">Home</a>
        <a href="#About">Sobre nós</a>
        <a href="#Courses">Cursos</a>
        <a href="#Contact">Contato</a>
      </nav>

      <LoginBtn />
    </header>
  )
}