import { ReactNode } from "react";
import styles from "./NavBar.module.css";

export default function NavBar(){

  const items = [
    {
      href: "#Home",
      name: "Home"
    },
    {
      href: "#About",
      name: "Sobre nós"
    },
    {
      href: "#Courses",
      name: "Cursos"
    },
    {
      href: "#Contact",
      name: "Contato"
    }
  ];

  return(
    <nav className={styles.navBar}>
      {items.map((item, index): ReactNode => {
        return <a key={index} href={item.href}>
          {item.name}
        </a>
      })}
    </nav>
  );
};