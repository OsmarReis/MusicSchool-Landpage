'use client'

import Image from "next/image";
import styles from "./Header.module.css"
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SidebarNav from "../SidebarNav/SidebarNav";
import LogoIcon from "../LogoIcon/LogoIcon";

export default function Header() {
  const [responsive, setResponsive] = useState<Boolean | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  useEffect(() => {
    console.log("Olá");
    const updateResponsive = () => {
      setResponsive(window.innerWidth < 796 ? true : false)
    }
    updateResponsive()
    window.addEventListener('resize', updateResponsive)
    return () => {
      window.removeEventListener('resize', updateResponsive)
    }
  }, [])

  return responsive !== undefined ? (
    responsive ? ( isOpen ? (
      <SidebarNav />
    ) : (
      <header className={styles.header}>
     <Image
     src="/menu-icon.svg"
     alt="Menu"
     className={styles.retractableMenu}
     width={24}
     height={24}
   />

   <LogoIcon />

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
    )

    ) : (
      <header className={styles.header}>
      <LogoIcon />

      <NavBar />

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
    )
  ) : null
}