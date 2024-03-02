import styles from './skills.module.css'
import htmlImg from '../../assets/skills/html-5-svgrepo-com.svg'
import cssImg from '../../assets/skills/css-3-svgrepo-com.svg'
import jsImg from '../../assets/skills/js-official-svgrepo-com.svg'
import bootstrapImg from '../../assets/skills/bootstrap-svgrepo-com.svg'
import reactImg from '../../assets/skills/react-svgrepo-com.svg'
import gitImg from '../../assets/skills/git-svgrepo-com.svg'





export const Skills = () => {
  return (
    <section className={styles.services} id='skills'>

        <h2 className={styles.heading}>skills<span></span></h2>

        <div className={styles.servicesContainer}>
            <div className={styles.skills}>
                <img src={htmlImg} alt="" />
                <h2>html</h2>
            </div>
            <div className={styles.skills}>
                <img src={cssImg} alt="" />
                <h2>css</h2>
            </div>
            <div className={styles.skills}>
                <img src={jsImg} alt="" />
                <h2>js</h2>
            </div>
            <div className={styles.skills}>
                <img src={bootstrapImg} alt="" />
                <h2>bootstrap</h2>
            </div>
            <div className={styles.skills}>
                <img src={reactImg} alt="" />
                <h2>react</h2>
            </div>
            <div className={styles.skills}>
                <img src={gitImg} alt="" />
                <h2>git</h2>
            </div>


            {/* <div className={styles.servicesBox}>
                <i className="bi bi-code-slash"></i>
                <h3>web development</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur perferendis quam maiores, ipsam adipisci facere? Incidunt eos, totam iste exercitationem debitis voluptatibus iure in enim.</p>
                <a href="#" className={styles.btn}>read more</a>
            </div>

            <div className={styles.servicesBox}>
            <i className="bi bi-palette-fill"></i>
                <h3>grafic design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur perferendis quam maiores, ipsam adipisci facere? Incidunt eos, totam iste exercitationem debitis voluptatibus iure in enim.</p>
                <a href="#" className={styles.btn}>read more</a>
            </div>


            <div className={styles.servicesBox}>
                <i className="bi bi-bar-chart-fill"></i>
                <h3>digital marketing</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur perferendis quam maiores, ipsam adipisci facere? Incidunt eos, totam iste exercitationem debitis voluptatibus iure in enim.</p>
                <a href="#" className={styles.btn}>read more</a>
            </div> */}

         



        </div>

    </section>
  )
}
