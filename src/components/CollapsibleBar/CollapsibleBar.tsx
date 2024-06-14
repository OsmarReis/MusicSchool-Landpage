'use client'

import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NavBar from "../NavBar/NavBar"
import styles from "./CollapsibleBar.module.css";

export default function CollapsibleBar(){
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const HamburgMenu = () => {
    return isOpen ? (<div onClick={handleIsOpen}>
      <MenuOpenIcon className={styles.menuOpen}/>
    </div>) : (<div className={styles.menu} onClick={handleIsOpen}>
      <MenuIcon/>
    </div>);
  }


  if(isOpen) {
    return (
      <div>
        <HamburgMenu/>
        <NavBar/>
      </div>
    )
  }

  return (
    <HamburgMenu/>
  )
}