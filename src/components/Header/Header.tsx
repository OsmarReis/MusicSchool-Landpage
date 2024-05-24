'use client'

import Image from "next/image";
import styles from "./Header.module.css"
import { useEffect, useState } from "react";

export default function Header() {
  const [responsive, setResponsive] = useState<Boolean | undefined>(undefined)

  useEffect(() => {
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
    responsive ? (
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
    ) : (
      <header className={styles.header}>
      <div className={styles.contentTitle}>
      <Image
              src="/logo.svg"
              alt="Guitar Logo"
              className={styles.logoIcon}
              width={24}
              height={24}
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


    //<header className={styles.header}>
//     <Image
//     src="/menu-icon.svg"
//     alt="Menu"
//     className={styles.retractableMenu}
//     width={24}
//     height={24}
//   />

//   <div className={styles.contentTitle}>
//     <Image
//       src="/logo.svg"
//       alt="Guitar Logo"
//       className={styles.logoIcon}
//       width={24}
//       height={24}
//     />
//     <h1>MusicaUni</h1>
//   </div>

//   <a href="#" className={styles.loginSection}>
//     <Image
//       src="/login.svg"
//       alt="User login"
//       className={styles.loginIcon}
//       width={24}
//       height={24}
//     />
//   </a>
// </header>
}