"use client";

import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import LogoIcon from "../LogoIcon/LogoIcon";
import CollapsibleBar from "../CollapsibleBar/CollapsibleBar";
import LoginIcon from '@mui/icons-material/Login';
import { useResponsive } from "@/hooks/useResponsive";

export default function Header() {
  const responsive = useResponsive(796);

  return (
    <header className={styles.header}>
      {responsive !== undefined ? (
        responsive ? (
          <>
            <CollapsibleBar />
            <LogoIcon />
          </>
        ) : (
          <>
            <LogoIcon />
            <NavBar />
          </>
        )
      ) : null}
      <div className={styles.loginIcon}>
        <LoginIcon />
      </div>
    </header>
  );
}
