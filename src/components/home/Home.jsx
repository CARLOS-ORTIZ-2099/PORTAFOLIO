import styles from './home.module.css'
/* console.log(styles); */
import avatar from '../../assets/images/home.png'

export const Home = () => {
  return (
    <section className={styles.home} id='home'>
      
        <div className={styles.homeContent}>
          <h3>hello, its me</h3>
          <h1>carlos eduardo ortiz</h1>
          <h3>and im a <span className={styles.span}>Frontend developer</span></h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repudiandae qui autem numquam alias quam, amet cumque

          </p>
          <div className={styles.socialMedia}>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-github"></i></a>
          </div>

          <a href="#" className={styles.btn}>download cv</a>

        </div>

        <div className={styles.homeImg}>
            <img src={avatar} alt="" />
        </div>


    </section>
  )
}
