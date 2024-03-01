import styles from './footer.module.css'

console.log(styles);

export const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.footerText}>
            <p>Copyright &copy; 2023 by eduardOc | all rights reserved</p>
        </div>

        <div className={styles.footerIconTop}>
            <a href="#home">
              <i className="bi bi-arrow-up"></i>
            </a>
        </div>


    </footer>
  )
}
