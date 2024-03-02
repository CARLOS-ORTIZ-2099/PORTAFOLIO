import styles from './header.module.css'
console.log(styles);
import menuImg from '../../assets/nav/menuIcon.png'
import closeMenuImg from '../../assets/nav/closeIcon.png'
import { useState } from 'react';



export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const activeMenu = () => {
    setOpenMenu(!openMenu)

  } 

  return (
   <header className={styles.header}>

      <a href="#" className={styles.logo}>
        <i className="bi bi-code-slash"></i> 
      </a>

      <i onClick={activeMenu} className={`bi ${openMenu ? 'bi-x' : 'bi-list' }`} id={styles.menuIcon}></i>

      <nav className={`${styles.navbar} ${openMenu && styles.active}`}>
        <a href="#" className={styles.active}>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

   </header>
  )

}
 