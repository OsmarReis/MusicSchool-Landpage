import styles from "./SidebarNav.module.css";
import NavBar from "../NavBar/NavBar";
import LogoIcon from "../LogoIcon/LogoIcon";

export default function SidebarNav() {
  return(
    <aside className={styles.sidebarNav}>
      <LogoIcon />
      <NavBar />
    </aside>
  )
}