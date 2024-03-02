import styles from './projects.module.css'
import project1 from '../../assets/apps/app-music.png'
import project2 from '../../assets/apps/calculator.png'
import project3 from '../../assets/apps/ip-address-tracker.png'
import project4 from '../../assets/apps/todo-app-drag-drop.png'
import project5 from '../../assets/apps/calculator-age.png'
import project6 from '../../assets/apps/search-movies.png'
import project7 from '../../assets/apps/countries-app.png'
import project8 from '../../assets/apps/ecommerce-products.png'
import project9 from '../../assets/apps/chat-simulator.png'


export const Projects = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
        
        <h2 className={styles.heading}>latest <span>project</span></h2>

        <div className={styles.portfolioContainer}>

            <div className={styles.portfolioBox}>
                <img src={project1} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>app music</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                  <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project2} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>calculator</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project3} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>ip address tracker</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project4} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>todo app drag drop</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project5} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>calculator age</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project6} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>search movies</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>
            <div className={styles.portfolioBox}>
                <img src={project7} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>countries app</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>
            <div className={styles.portfolioBox}>
                <img src={project8} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>ecommerce products</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div className={styles.portfolioBox}>
                <img src={project9} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>chat simulator</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="#"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

        </div>

    </section>
  )
}
