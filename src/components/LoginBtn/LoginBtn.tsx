'use client'

import Image from "next/image";
import styles from "./LoginBtn.module.css";
import { useEffect, useState } from "react";

export default function LoginBtn(){
  const [mobile, setMobile] = useState<Boolean | undefined>(undefined)

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 576 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  return mobile !== undefined ? (
    mobile ? (
      <a href="#" className={styles.loginSection}>
         <Image
           src="/login.svg"
           alt="User login"
           className={styles.loginIcon}
           width={24}
           height={24}
         />
     </a>
    ) : (
      <a href="#" className={styles.loginSection}>
         Já sou aluno!
         <Image
           src="/login.svg"
           alt="User login"
           className={styles.loginIcon}
           width={24}
           height={24}
         />
     </a>
    )
  ) : null
}