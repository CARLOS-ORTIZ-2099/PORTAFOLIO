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
            
            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>3 de Marzo de 2022</time>
                    <h3 className={styles.curso}>Curso Html</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>

            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>19 de Noviembre de 2022</time>
                    <h3 className={styles.curso}>Curso Js</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>



            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>8 de Febrero de 2023</time>
                    <h3 className={styles.curso}>Curso Css</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>

           
            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>24 de marzo de 2023</time>
                    <h3 className={styles.curso}>Curso Poo Js</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>

            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>27 de Julio de 2023</time>
                    <h3 className={styles.curso}>Curso React</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>

            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>19 de Agosto de 2023</time>
                    <h3 className={styles.curso}>Curso Git</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>



            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>9 de Septiembre de 2023</time>
                    <h3 className={styles.curso}>Curso Bootstrap</h3>
                    <p className={styles.institucion}>Ed team</p>
               </div>
            </div>

       

            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>31 de Diciembre de 2023</time>
                    <h3 className={styles.curso}>Algoritmos y E. de Datos Js</h3>
                    <p className={styles.institucion}>FreeCodeCamp</p>
               </div>
            </div>

            <div data-aos = "fade-up" className={styles.evento}>
                <div  >
                    <a className={styles.btn} href="#">see more</a>
                </div>
               <div className={styles.texto}>
                    <time className={styles.fecha}>23 de Febrero de 2024</time>
                    <h3 className={styles.curso}>Master en React</h3>
                    <p className={styles.institucion}>Udemy</p>
               </div>
            </div>

            



{/*             <div className={styles.evento}>
                <div className={styles.foto} >
                 
                   <button>see more</button>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>

            <div className={styles.evento}>
                <div className={styles.foto} >
                <button>see more</button>
                </div>
                <h3 className={styles.fecha}>3 de Febrero de 2021</h3>
            </div>
 */}
       {/*      <div className={styles.evento}>
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
            */}
        </div>

    </section>
  )
}
