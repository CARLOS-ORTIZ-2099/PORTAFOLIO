import styles from './about.module.css'
import imageAbout from '../../assets/images/about.png'

export const About = () => {
  return (
    <section className={styles.about} id='about'>

        <div className={styles.aboutImg}>
          <img src={imageAbout} alt="" />
        </div>

        <div className={styles.aboutContent}>
            <h2 className={styles.Heading}>About <span>Me</span></h2>
            <h3>frontend developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta, delectus harum, animi voluptates corporis aspernatur voluptate laborum reiciendis autem eveniet nesciunt doloremque aperiam magnam ipsa possimus, nobis hic repellendus est nam a nemo suscipit ab eos? Aliquid labore qui ullam eveniet accusamus autem dolores commodi.</p>
            <a href="#" className={styles.btn}>read more</a>
        </div>

    </section>
  )
}
