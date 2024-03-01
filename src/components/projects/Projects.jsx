import styles from './projects.module.css'
import project1 from '../../assets/images/portfolio1.jpg'
import project2 from '../../assets/images/portfolio2.jpg'
import project3 from '../../assets/images/portfolio3.jpg'
import project4 from '../../assets/images/portfolio4.jpg'
import project5 from '../../assets/images/portfolio5.jpg'
import project6 from '../../assets/images/portfolio6.jpg'


export const Projects = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
        
        <h2 className={styles.heading}>latest <span>project</span></h2>

        <div className={styles.portfolioContainer}>

            <div className={styles.portfolioBox}>
                <img src={project1} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project2} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project3} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project4} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project5} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project6} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>web design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>

        </div>

    </section>
  )
}
