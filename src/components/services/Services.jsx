import styles from './services.module.css'

export const Services = () => {
  return (
    <section className={styles.services} id='services'>

        <h2 className={styles.heading}>our <span>services</span></h2>

        <div className={styles.servicesContainer}>

            <div className={styles.servicesBox}>
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
            </div>

         



        </div>

    </section>
  )
}
