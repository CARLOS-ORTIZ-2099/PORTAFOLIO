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

            <div data-aos = "flip-left" data-aos-duration="2000" className={styles.portfolioBox}>
                <img  src={project1} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>app music</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                  <a href="https://app-music-nu.vercel.app/" target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-right" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project2} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>calculator</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://calculator-js-nu.vercel.app/" target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-left" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project3} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>ip address tracker</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://ip-address-tracker-master-drab.vercel.app/" target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-right" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project4} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>todo app drag drop</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://todo-app-main-sandy.vercel.app/" target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-left" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project5} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>calculator age</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://calculator-age-navy.vercel.app/" target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-right" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project6} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>search movies</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://search-movies-blancmange-9d114-movies.netlify.app/"  target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-left" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project7} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>countries app</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://countries-app-hummingbird-4995dd.netlify.app/"  target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-right" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project8} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>ecommerce products</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://ecommerce-tarsier-57cfed.netlify.app/"  target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

            <div data-aos = "flip-left" data-aos-duration="2000" className={styles.portfolioBox}>
                <img src={project9} alt="" />
                <div className={styles.portfolioLayer}>
                  <h4>chat simulator</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, qui?</p>
                  <div className={styles.links}>
                    <a href="https://chat-group-568053.netlify.app/"  target="blank"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </div>
                </div>
            </div>

        </div>

    </section>
  )
}
