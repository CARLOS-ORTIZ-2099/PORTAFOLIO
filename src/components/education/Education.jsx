import styles from './education.module.css'
import img1 from '../../assets/certifications/certificad-curso-html-2020.png'

import img2 from '../../assets/certifications/certificad-curso-css-2020.png'

import img3 from '../../assets/certifications/certificad-curso-javascript.png'

import img4 from '../../assets/certifications/certificad-curso-js-poo.png'

import img5 from '../../assets/certifications/certificad-curso-bootstrap.png'

import img6 from '../../assets/certifications/certificad-curso-git.png'

import img7 from '../../assets/certifications/certificad-curso-react.png'

import img8 from '../../assets/certifications/freecodecamp.png'

import img9 from '../../assets/certifications/react-udemy.jpg'





export const Education = () => {
  return (
    <section id="education">
        <div className={styles.hero}>
            <h1>Mis Estudios</h1>
        </div>

        <div className={styles.container}>
            
            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img1} alt=""/>
                </div>
                <h3 className={styles.fecha}>9 de Enero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img2} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img3} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img4} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img5} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img6} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img7} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img8} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                    <img src={img9} alt=""/>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>
           
        </div>

    </section>
  )
}
