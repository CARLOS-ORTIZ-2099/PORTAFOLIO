import styles from './navbar.module.css'
console.log(styles);
import menuImg from '../../assets/nav/menuIcon.png'
import closeMenuImg from '../../assets/nav/closeIcon.png'
import { useState } from 'react';

export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const activeMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
   <header className={styles.header}>
    
      <nav className={styles.navbarContainer}>
        <span className={styles.nameContainer}>
        <i className="bi bi-code-slash"></i> 
        <a className={styles.linkHome} href='/' >Carlos ortiz </a>
        </span>


        <span className='theme'>
          <i className="bi bi-moon-fill"></i>
        </span>

        <img onClick={activeMenu} className={styles.menuBtn} src={openMenu ? closeMenuImg : menuImg} alt="" />
        
        <div className={`${styles.menu} ${openMenu && styles.changeVisibility}`}>
         
          <ul className={styles.ulContainer}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#studys">studys</a>
            </li>

            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
          
        </div>

      

      </nav>

   </header>
  )

}
 