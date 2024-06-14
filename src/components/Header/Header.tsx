"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SidebarNav from "../SidebarNav/SidebarNav";
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

  //   return responsive !== undefined ? (
  //     responsive ? ( isOpen ? (
  //       <SidebarNav />
  //     ) : (
  //       <header className={styles.header}>
  //      <Image
  //      src="/menu-icon.svg"
  //      alt="Menu"
  //      className={styles.retractableMenu}
  //      width={24}
  //      height={24}
  //    />

  //    <LogoIcon />

  //    <a href="#" className={styles.loginSection}>
  //      <Image
  //        src="/login.svg"
  //        alt="User login"
  //        className={styles.loginIcon}
  //        width={24}
  //        height={24}
  //      />
  //    </a>
  //  </header>
  //     )

  //     ) : (
  //       <header className={styles.header}>
  //       <LogoIcon />

  //       <NavBar />

  //       <a href="#" className={styles.loginSection}>
  //          <Image
  //            src="/login.svg"
  //            alt="User login"
  //            className={styles.loginIcon}
  //            width={24}
  //            height={24}
  //          />
  //      </a>
  //     </header>
  //     )
  //   ) : null
}
