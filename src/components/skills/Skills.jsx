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
            <div  className={styles.skills}>
                <img data-aos="fade-up-right" src={htmlImg} alt="" />
                <h2>html</h2>
            </div>

            <div  className={styles.skills}>
                <img data-aos="fade-up" src={cssImg} alt="" />
                <h2>css</h2>
            </div>

            <div  className={styles.skills}>
                <img data-aos="fade-up-left" src={jsImg} alt="" />
                <h2>js</h2>
            </div>

            <div  className={styles.skills}>
                <img data-aos="fade-up-right" src={bootstrapImg} alt="" />
                <h2>bootstrap</h2>
            </div>

            <div  className={styles.skills}>
                <img data-aos="fade-up" src={reactImg} alt="" />
                <h2>react</h2>
            </div>

            <div  className={styles.skills}>
                <img data-aos="fade-up-left" src={gitImg} alt="" />
                <h2>git</h2>
            </div>

        </div>

    </section>
  )
}
